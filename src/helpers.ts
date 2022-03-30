import classnames from "./classnames";

import { getWindow, getDocument } from "./ssr";

const window = getWindow();
const document = getDocument();

// dynamic function naming
export const namedFunction = (name: string, fn: any) => Object.defineProperty(fn, "name", { value: name });

function empty(value: any) {
    //check if value is null or undefined
    if (value === null || value === "" || value === undefined) return true;
    // handle value if object
    if (typeof value === "object") {
        // check if object is an actual array or object
        if (Array.isArray(value)) {
            if (value.length) return false;
        } else {
            // try to iterate over the properties of the object.
            // If there is even a single iteration, then the object is not empty.
            for (const property in value) {
                return false;
            }
        }
    }
    // return false if not condition is met - means value is not empty
    return false;
}

interface IExplodeClasses {
    identifier: string;
    isGrouped: boolean;
}
export const explodeClasses = (classes: string): IExplodeClasses[] => {
    let inside_brackets = false;
    let bracket_type = "parentheses"; // parentheses/round (), square [], angle <>
    let result = [];
    let fullClass = "";
    for (let i = 0; i <= classes.length; i++) {
        inside_brackets = classes[i] === "[" ? true : classes[i] === "]" ? false : inside_brackets;
        // inside_brackets = classes[i] === "(" ? true : classes[i] === ")" ? false : inside_brackets;
        if ((!inside_brackets && classes[i] === " ") || i === classes.length) {
            const isGrouped = fullClass.match(/\[[^\]]*]/g) ? true : false;
            result.push({ identifier: fullClass, isGrouped: isGrouped });
            fullClass = "";
        } else fullClass += classes[i];
    }
    // console.log(result);

    return result;
};

export function getGroupedClasses(group: string) {
    return group.substring(group.indexOf("[") + 1, group.indexOf("]"));
    // return group.match(/(?:\[).+?(?=\])/g)![0];
    // return group.match(/(?<=\[).+?(?=\])/g)![0];
}

export const filterClass = (className: string) => {
    const cssSegments = className.split("-");
    const cssSegmentsSize = cssSegments.length;

    let identifier = "";
    let value = "";

    classnames.forEach((first) => {
        first.aliases.forEach((second) => {
            const segments = second.split("-");
            const segmentsSize = segments.length;

            let matches = [];
            for (let i = 0; i < cssSegmentsSize; i++) {
                if (segments[i] === cssSegments[i]) {
                    matches.push(segments[i]);
                }
            }
            if (matches.length === segmentsSize) {
                const filteredSegments = [...cssSegments];
                identifier = filteredSegments.splice(0, matches.length).join("-");
                value = filteredSegments.join("");
            }
        });
    });

    return { identifier, value };
};

export function isEmpty(value: any) {
    return empty(value);
}
export function hasValue(value: any) {
    return !empty(value);
}

const handleCSSNumberedClasses = (className: string) => {
    let result = className;
    result = result.replace(/\b\d/g, function (match) {
        return "\\0000" + match.charCodeAt(0).toString(16);
    });
    result = result.replace(/\\\s/g, `.`); // replace "\ "
    result = result.replace(/\s/g, `.`); // replace whitespaces
    return result;
};

// CSS.escape pollyfill
export const cssEscape = (value: string): string => {
    if (typeof CSS.escape === "function") {
        return handleCSSNumberedClasses(CSS.escape(value));
    }

    if (value.length === 0) {
        throw new TypeError("`CSS.escape` requires an argument.");
    }
    var string = String(value);
    var length = string.length;
    var index = -1;
    var codeUnit;
    var result = "";
    var firstCodeUnit = string.charCodeAt(0);
    while (++index < length) {
        codeUnit = string.charCodeAt(index);
        if (codeUnit === 0x0000) {
            result += "\uFFFD";
            continue;
        }

        if (
            (codeUnit >= 0x0001 && codeUnit <= 0x001f) ||
            codeUnit === 0x007f ||
            (index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
            (index === 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit === 0x002d)
        ) {
            result += "\\" + codeUnit.toString(16) + " ";
            continue;
        }

        if (index === 0 && length === 1 && codeUnit === 0x002d) {
            result += "\\" + string.charAt(index);
            continue;
        }

        if (
            codeUnit >= 0x0080 ||
            codeUnit === 0x002d ||
            codeUnit === 0x005f ||
            (codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
            (codeUnit >= 0x0041 && codeUnit <= 0x005a) ||
            (codeUnit >= 0x0061 && codeUnit <= 0x007a)
        ) {
            result += string.charAt(index);
            continue;
        }

        result += "\\" + string.charAt(index);
    }

    return handleCSSNumberedClasses(result);
};

export const viewPortMetaTagExists = () => {
    let viewportMetaTag = document.querySelector('meta[name="viewport"]');
    return viewportMetaTag && viewportMetaTag.hasAttribute("content");
};

export const insertViewPortMetaTag = () => {
    var meta = document.createElement("meta");
    meta.name = "viewport";

    meta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0");

    document.getElementsByTagName("head")[0]?.appendChild(meta);
};
