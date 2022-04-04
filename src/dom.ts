import { SH_ATTR } from "./constants";

const ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */
const findLastStyleTag = (target: HTMLElement): void | HTMLStyleElement => {
    const { childNodes } = target;

    for (let i = childNodes.length; i >= 0; i--) {
        const child = childNodes[i] as any as HTMLElement | null | undefined;
        if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SH_ATTR)) {
            return child as any as HTMLStyleElement;
        }
    }

    return undefined;
};

/** Create a style element inside `target` or <head> after the last */
export const makeStyleTag = (target?: HTMLElement): HTMLStyleElement => {
    const head = document.head as any as HTMLElement;
    const parent = target || head;
    const style = document.createElement("style");
    const prevStyle = findLastStyleTag(parent);
    // const nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;

    // style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
    // style.setAttribute(SC_ATTR_VERSION, SC_VERSION);

    // const nonce = getNonce();

    // if (nonce) style.setAttribute("nonce", nonce);

    // parent.insertBefore(style, nextSibling);

    return style;
};
