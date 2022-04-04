const mockSheet = () => {
    const cssRules: any = [];
    return {
        cssRules, // an array of rules in the sheet
        insertRule: (rule: any, index: number) => {
            // a method to insert rules to the sheet
            cssRules[index] = rule;
        },
        extract: () => cssRules.join(""), // a method to return all the style strings
    };
};

let sheet: any = mockSheet();
if (typeof window !== "undefined") {
    // Create the <style> tag
    let el = document.createElement("style");
    // add parameters
    // el.setAttribute("data-origin", "shonaui");
    el.setAttribute("data-origin-shonaui", "");
    el.setAttribute("media", "screen");
    el.setAttribute("type", "text/css");
    el.setAttribute("rel", "stylesheet");
    // WebKit hack :(
    el.appendChild(document.createTextNode(""));
    // Add the <style> element to the page
    sheet = document.head.appendChild(el).sheet;
}

export const CustomSheet = class Sheet {
    element: HTMLStyleElement;

    sheet: CSSStyleSheet;

    length: number;

    constructor(target?: HTMLElement) {
        // fix this
        // const element = (this.element = makeStyleTag(target));

        // Avoid Edge bug where empty style elements don't create sheets
        // element.appendChild(document.createTextNode(""));

        // fix this
        // this.sheet = getSheet(element);
        this.length = 0;
    }

    // addRule(stylesheetId, selector, rule) {
    //     var stylesheet = document.getElementById(stylesheetId);

    //     if (stylesheet) {
    //         stylesheet = stylesheet.sheet;

    //         if (stylesheet.addRule) {
    //             stylesheet.addRule(selector, rule);
    //         } else if (stylesheet.insertRule) {
    //             stylesheet.insertRule(selector + " { " + rule + " }", stylesheet.cssRules.length);
    //         }
    //     }
    // }

    insertRule(index: number, rule: string): boolean {
        try {
            this.sheet.insertRule(rule, index);
            this.length++;
            return true;
        } catch (_error) {
            return false;
        }
    }

    deleteRule(index: number): void {
        this.sheet.deleteRule(index);
        this.length--;
    }

    getRule(index: number): string {
        const rule = this.sheet.cssRules[index];
        // Avoid IE11 quirk where cssText is inaccessible on some invalid rules
        if (rule !== undefined && typeof rule.cssText === "string") {
            return rule.cssText;
        } else {
            return "";
        }
    }
};
