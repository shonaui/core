/* eslint-disable no-param-reassign */
function isObject(obj: any) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}

function extend(target: any = {}, src: any = {}) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === "undefined") target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

const ssrDocument = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: "",
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return {
            initEvent() {},
        };
    },
    getElementsByTagName() {
        return [];
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
    },
};

function getDocument() {
    const doc: Document = typeof document !== "undefined" ? document : ({} as Document);
    extend(doc, ssrDocument);
    return doc;
}

export { getDocument, ssrDocument };

const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: "",
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {},
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return "";
            },
        };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {};
    },
    requestAnimationFrame(callback: any) {
        if (typeof setTimeout === "undefined") {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id: any) {
        if (typeof setTimeout === "undefined") {
            return;
        }
        clearTimeout(id);
    },
};

function getWindow() {
    const win: Window = typeof window !== "undefined" ? window : ({} as Window);
    extend(win, ssrWindow);
    return win;
}

export { getWindow, ssrWindow };
