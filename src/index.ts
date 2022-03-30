import { design } from "./design";
import { insertViewPortMetaTag, viewPortMetaTagExists } from "./helpers";
// import { haha } from "./window";

import { getWindow, getDocument } from "./ssr";

const window = getWindow();
const document = getDocument();

// TODO: create an interface for the 'config' object
const initializeLibrary = (config: any) => {
    if (!viewPortMetaTagExists()) insertViewPortMetaTag();

    let classList: any = [];
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

// let isMobileDevice = window.matchMedia("(max-width: 576px)").matches;
// if (isMobileDevice) {
//     // The viewport is less than 768 pixels wide
//     //Conditional script here
// } else {
//     //The viewport is greater than 700 pixels wide
//     alert("This is not a mobile device.");
// }

// console.log(prefix);

export const shonaui = {
    init: (config: any) => {
        init(config);
    },
};

if (typeof window !== "undefined" || typeof self !== "undefined" || typeof document !== "undefined") {
    window.addEventListener("DOMContentLoaded", (event: any) => {
        const targetNode: any = document.body;
        const config2: any = { childList: true, subtree: true, attributes: true };

        const callback = function (mutationsList: any, observer: any) {
            for (let mutation of mutationsList) {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    initializeLibrary(globalConfig);
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config2);

        initializeLibrary(globalConfig);
    });
}

// for npm install
// const shonaui = (config: any) => {
//     initializeLibrary(config);
// };

// export default shonaui;

// var prefix = (function () {
//     let styles: any = window.getComputedStyle(document.documentElement, null);
//     let pre: any | null = Array.prototype.slice
//         .call(styles)
//         .join("")
//         .match(/-(moz|webkit|ms)-/)[1];
//     // ||
//     // (styles.OLink === "" && ["", "o"]))[1];
//     let dom: any = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
//     return {
//         dom: dom,
//         lowercase: pre,
//         css: "-" + pre + "-",
//         js: pre[0].toUpperCase() + pre.substr(1),
//     };
// })();