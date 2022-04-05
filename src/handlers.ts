interface iHandler {
    (config: any, key: string, value: string): string;
}

export const Color = (config: any, key: string, value: string, dark: boolean): string => {
    // console.log(localStorage.getItem("shonaui-theme"));

    const colors =
        config && config.colors
            ? config.colors[localStorage.getItem("shonaui-theme") === "dark" ? "dark" : "light"]
            : null;
    // console.log(colors);

    if (colors && colors[value]) {
        return colors[value];
    } else {
        return value;
    }
};

const hasUnit = (value: string, searchUnits: string[]) =>
    searchUnits.some((el) => {
        return value.endsWith(el);
    });

export const Size: iHandler = (config, key, value) => {
    const sizes = config && config?.sizes ? config.sizes : null;
    let result = value;
    if (sizes && sizes[value]) result = sizes[value];

    const cssUnits = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];

    if (!hasUnit(value, cssUnits)) result += "px";

    return result;
};

export const Justify = (value: string) => {
    switch (value) {
        case "center":
            return "center";
        case "start":
            return "flex-start";
        case "end":
            return "flex-end";
        case "between":
            return "space-between";
        case "around":
            return "space-around";
        default:
            return value;
    }
};

export const Direction = (value: string) => {
    switch (value) {
        case "row":
            return "row";
        case "rowreverse":
            return "row-reverse";
        case "column":
            return "column";
        case "columnreverse":
            return "column-reverse";
        default:
            return "";
    }
};

export const Flex: iHandler = (config, key, value) => {
    if (value === "row" || value === "rowreverse" || value === "column" || value === "columnreverse") {
        return `flex-direction: ${Direction(value)};`;
    } else if (value === "wrap" || value === "nowrap") {
        return `flex-wrap: ${value}`;
    } else {
        return "";
    }
};

export const Items = (value: string) => {
    switch (value) {
        case "center":
            return "center";
        case "start":
            return "flex-start";
        case "end":
            return "flex-end";
        case "stretch":
            return "stretch";
        case "baseline":
            return "baseline";
        default:
            return value;
    }
};

export const Self = (value: string) => {
    switch (value) {
        case "center":
            return "center";
        case "auto":
            return "auto";
        case "start":
            return "flex-start";
        case "end":
            return "flex-end";
        case "stretch":
            return "stretch";
        default:
            return null;
    }
};

export const Decoration = (value: string) => {
    switch (value) {
        case "none":
            return "none";
        case "underline":
            return "underline";
        case "through":
            return "line-through";
        default:
            return null;
    }
};

export const No = (value: string) => {
    switch (value) {
        case "select":
            return `user-select: none;-ms-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-webkit-touch-callout: none;`;
        case "drag":
            return "user-drag: none;-o-user-drag: none;-moz-user-drag: none;-khtml-user-drag: none;-webkit-user-drag: none;";
        case "outline":
            return "outline: none;";
        case "border":
            return "border: none;";
        case "overflow":
            return "overflow: clip;";
        case "decoration":
            return "text-decoration: none;";
        case "box-shadow":
            return "box-shadow: 0 0 #0000;";
        case "drop-shadow":
            return "filter: drop-shadow(0 0 #0000);";
        case "appearance":
            return "appearance: none;";
        default:
            return null;
    }
};

function hexToRgbA(hex: string) {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
    }
    return null;
}

// TODO: handle color first with Color function before using it
export const BoxShadow = (value: string) => {
    const sizes: string[] = ["xs", "sm", "lg", "xl"];
    let size: string | null = null;
    let color: string | null = null;
    let opacity: string | null = null;

    const segments = value.split("-");

    if (segments.length >= 1 && sizes.includes(segments[0])) {
        size = segments[0];
    }
    if (segments.length >= 2) {
        color = hexToRgbA(segments[1]);
    }
    if (segments.length === 3) {
        opacity = segments[2];
    }

    if (segments.length === 0 || segments.length > 3) {
        return null;
    }

    return `box-shadow: 0 4px 6px -1px rgb(${color ? color : "0 0 0"} , ${
        opacity ? opacity : "0.1"
    }), 0 2px 4px -2px rgb(${color ? color : "0 0 0"} , ${opacity ? opacity : "0.1"})`;
};

const gradientDirection = (dir: string) => {
    return dir === "t"
        ? "top"
        : dir === "tr"
        ? "top right"
        : dir === "r"
        ? "right"
        : dir === "br"
        ? "bottom right"
        : dir === "b"
        ? "bottom"
        : dir === "bl"
        ? "bottom left"
        : dir === "l"
        ? "left"
        : dir === "tl"
        ? "top left"
        : null;
};

export const BGGradient = (value: string) => {
    let direction: string | null = null;
    let from: string | null = null;
    let via: string | null = null;
    let to: string | null = null;

    const segments = value.split("-");

    if (segments.length < 6 || segments.length > 8) {
        return null;
    }
    direction = segments[1];
    from = segments[3];
    if (segments.length === 8) {
        via = segments[5];
        to = segments[7];
    } else {
        to = segments[5];
    }

    // console.log(direction, from, via, to);

    // return `background-image: linear-gradient(to ${gradientDirection(direction)}, ${from ? from + "," : ""} ${
    //     to ? to : ""
    // });`;
    return `background-image: linear-gradient(to ${gradientDirection(direction)}, ${from ? from + "," : ""} ${
        via ? via + "," : ""
    } ${to ? to : ""}); `;
};

export const TextGradient = (value: string) => {
    return `${BGGradient(
        value,
    )}-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-box-decoration-break:clone;`;
};
