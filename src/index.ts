import { design } from "./design";
import { insertViewPortMetaTag, viewPortMetaTagExists } from "./helpers";
// import { haha } from "./window";
import { darkModeHandler } from "./utils/dark-mode";

import { toggleDarkTheme as toggleDarkMode, setTheme as changeTheme } from "./utils/dark-mode";

import { getWindow, getDocument } from "./ssr";

const window = getWindow();
const document = getDocument();

// TODO: create an interface for the 'config' object
const initializeLibrary = (config: any) => {
    if (!viewPortMetaTagExists()) insertViewPortMetaTag();

    darkModeHandler(config);

    let classList: any = [];
    document.querySelectorAll("*[class]").length > 0 &&
        document.querySelectorAll("*[class]").forEach((e) => {
            let classes: any = e.className.split(" ");
            classes = typeof e.className.split(" ") === "object" ? e.className.split(" ") : [e.className.split(" ")];
            classList = Array.from(new Set([...classList, ...classes])); // concatenate & remove duplicates
        });
    design(classList.join(" "), config);
    // console.log("init ran");
};

var globalConfig = {};

// for script tag
export const init = (config: any) => {
    // const stylesheet = document.querySelectorAll('[property="value"]');
    // console.log(stylesheet);

    globalConfig = config;
    if (typeof window !== "undefined" || typeof self !== "undefined" || typeof document !== "undefined") {
        initializeLibrary(config);
    }
};

// Detect Vendor Prefix with JavaScript
const prefix = (function () {
    let styles: any = window.getComputedStyle(document.documentElement, "");
    let pre: any | null =
        Array.prototype.slice
            .call(styles)
            .join("")
            .match(/-(moz|webkit|ms)-/) ||
        (styles.OLink === "" && ["", "o"]);
    if (pre) pre = pre[1]; // Object is possibly 'null'.
    let dom: any | null = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"));
    if (dom) dom = dom[1]; // Object is possibly 'null'.
    return {
        dom: dom,
        lowercase: pre,
        css: "-" + pre + "-",
        js: pre[0].toUpperCase() + pre.substr(1),
    };
})();

export const screenSize = {
    xs: window.matchMedia("(max-width: 576px)").matches,
    sm: window.matchMedia("(min-width: 576px)").matches,
};

export function listenForChanges() {
    const callback = function (mutationsList: any, observer: any) {
        for (let mutation of mutationsList) {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                // console.log("Something changed....");
                initializeLibrary(globalConfig);
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
}

export const shonaui = {
    init: (config: any) => {
        init(config);
    },
};

if (typeof window !== "undefined" || typeof self !== "undefined" || typeof document !== "undefined") {
    window.addEventListener("DOMContentLoaded", (event: any) => {
        // initial call
        initializeLibrary(globalConfig);
        listenForChanges();
    });
}

// call init() to re-initialize the library on theme change for changes to reflect
export const toggleDarkTheme = () => {
    toggleDarkMode();
    init(globalConfig);
};
export const setTheme = (theme: string) => {
    changeTheme(theme);
    init(globalConfig);
};

// you can set global styles akak custom styles like dark mode smooth transition
const globalStyles = {};
// transition smoothly from one theme to another instead of instantly jumping from light to dark theme.
// "* { transition: background-color 0.6s ease, color 1s ease;}",
