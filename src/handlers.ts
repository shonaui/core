import { isDarkTheme } from "./utils/dark-mode";

interface iHandler {
    (config: any, key: string, value: string): string;
}

export const Color: iHandler = (config, key, value) => {
    console.log(localStorage.getItem("shonaui-theme"));

    const colors =
        config && config.colors
            ? config?.darkMode
                ? config.colors[localStorage.getItem("shonaui-theme") === "dark" ? "dark" : "light"]
                : config.colors["light"]
            : null;
    console.log(colors);

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
        default:
            return null;
    }
};
