import classnames from "./classnames";
import { resolver } from "./resolver";
import { explodeClasses, filterClass, cssEscape, getGroupedClasses } from "./helpers";
import { cssResetRules, cssNormalizeRules } from "./css";

// CSS Vendor Prefixes

// -webkit- (Chrome, Safari, newer versions of Opera, almost all iOS browsers including Firefox for iOS; basically, any WebKit based browser)
// -moz- (Firefox)
// -o- (old pre-WebKit versions of Opera)
// -ms- (Internet Explorer and Microsoft Edge)
// (standard)

// Breakpoints
/* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}
/* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}
/* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}
/* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}
/* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}

// If darkMode == auto
/**
 * 
 * @media (prefers-color-scheme: light) {
* 	body {
* 		background-color: #f5f5f5;
* 		color: #222;
* 	}
* }

* @media (prefers-color-scheme: dark) {
* 	body {
* 		background-color: #222;
* 		color: #fff;
* 	}
* }
 * 
 * / 
 **/
//  OR -----

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

// As a configurable alternative to cssinsertRule, global styles can be used
// var style = document.createElement("style");
// style.innerHTML = `#target {color: blueviolet;}`;
// document.head.appendChild(style);

export const design = (classes: string, config: any) => {
    const cssRules: any = sheet.cssRules || sheet.rules;

    console.log(cssRules);

    // cssRules.forEach((rule: any) => {
    //     console.log(rule);

    //     // sheet?.deleteRule(rule, cssRules.length);
    // });

    if (config?.cssreset === true) {
        cssResetRules.forEach((rule: string) => {
            sheet?.insertRule(rule, cssRules.length);
        });
    }

    if (config?.normnalize === true) {
        cssNormalizeRules.forEach((rule: string) => {
            sheet?.insertRule(rule, cssRules.length);
        });
    }

    if (!classes) return undefined;

    // const separateClassNames = classes.replace(/\s+/g, " ").trim().split(" ");
    const separateClassNames = explodeClasses(classes);

    // const groupMatches = css.match(/(?<=\[).+?(?=\])/g)[0];

    // let obj = {};
    let classList = "";

    separateClassNames.forEach((className) => {
        const ogclassName = { ...className };
        // console.log(className.identifier);
        // Pseudo-classes select regular elements but under certain conditions
        const pseudoClasses: string[] = [
            "hover",
            "active",
            "focus",
            "visited",
            "link",
            "enabled",
            "disabled",
            "checked",
            "root",
            "empty",
            "only-of-type",
            "only-child",
            "last-of-type",
            "first-of-type",
            "last-child",
            "nth-last-of-type(n)",
            "nth-of-type(n)",
            "nth-last-child(n)",
            "nth-child(n)",
            "first-child",
        ];
        // Pseudo-elements effectively create new elements that are not specified in the markup of the document and can be manipulated much like a regular element.
        const pseudoElements: string[] = ["before", "after", "first-letter", "first-line"];
        const pseudoCustom: string[] = ["xs", "sm", "md", "xm", "group-hover"];

        let chainedPseudo: string[] = [];

        const groupHover: boolean = className.identifier.includes("group-hover:");
        if (groupHover) {
            className.identifier = className.identifier.replace("group-hover:", "");
            chainedPseudo.push("group-hover");
        }

        const hover: boolean = className.identifier.includes("hover:");
        if (hover) {
            className.identifier = className.identifier.replace("hover:", "");
            chainedPseudo.push("hover");
        }

        const focus: boolean = className.identifier.includes("focus:");
        if (focus) {
            className.identifier = className.identifier.replace("focus:", "");
            chainedPseudo.push("focus");
        }

        // Extra small (xs)
        // Small (sm)
        // Medium (md)
        // Large (lg)
        // Extra large (xl)
        // Extra extra large (xxl)

        const xs: boolean = className.identifier.includes("xs:");
        if (xs) className.identifier = className.identifier.replace("xs:", "");

        const sm: boolean = className.identifier.includes("sm:");
        if (sm) className.identifier = className.identifier.replace("sm:", "");

        const md: boolean = className.identifier.includes("md:");
        if (md) className.identifier = className.identifier.replace("md:", "");

        const lg: boolean = className.identifier.includes("lg:");
        if (lg) className.identifier = className.identifier.replace("lg:", "");

        const xl: boolean = className.identifier.includes("xl:");
        if (xl) className.identifier = className.identifier.replace("xl:", "");

        const xxl: boolean = className.identifier.includes("xxl:");
        if (xxl) className.identifier = className.identifier.replace("xxl:", "");

        const negative: boolean = className.identifier.startsWith("-");
        if (negative) className.identifier = className.identifier.substring(1);

        const important: boolean = className.identifier.startsWith("!");
        if (important) className.identifier = className.identifier.substring(1);

        // const segments = className.split("-");
        // const value: string = segments.length > 1 ? segments.pop()! : "";
        // let identifier = value ? className.substring(0, className.length - value.length - 1) : segments[0]; // -1 to remove the dash (-)

        const { identifier, value } = filterClass(className.identifier);

        // ===============================================================================================

        // console.log("identifier: " + identifier, "value: " + value);

        // check grouped classes if they're valid here!

        // console.log("getGroupedClasses", className.identifier.match(/(?<=\[).+?(?=\])/g));

        if (
            classnames.find((e) => {
                // handle grouped classes
                if (className.isGrouped) {
                    const matchedClasses = className.identifier.substring(
                        className.identifier.indexOf("[") + 1,
                        className.identifier.indexOf("]"),
                    );
                    // const matchedClasses = className.identifier.match(/(?:\[).+?(?=\])/g)!;
                    // const matchedClasses = className.identifier.match(/(?<=\[).+?(?=\])/g)!;
                    const matchedClassesSegments = matchedClasses.split(" ");

                    let res = true;

                    matchedClassesSegments.forEach((seg: string) => {
                        const { identifier: i, value: v } = filterClass(seg);
                        if (!res) res = e.aliases.includes(i);
                    });

                    return res;
                } else {
                    return e.aliases.includes(identifier);
                }
            })
        ) {
            let cssRule = "";

            if (className.isGrouped) {
                const matchedClasses = className.identifier.substring(
                    className.identifier.indexOf("[") + 1,
                    className.identifier.indexOf("]"),
                );
                // const matchedClasses = className.identifier.match(/(?:\[).+?(?=\])/g)!;
                // const matchedClasses = className.identifier.match(/(?<=\[).+?(?=\])/g)!;
                const matchedClassesSegments = matchedClasses.split(" ");
                matchedClassesSegments.forEach((seg: string) => {
                    const { identifier: i, value: v } = filterClass(seg);
                    cssRule += resolver(config, i, v, negative, important);
                });
            } else {
                cssRule = resolver(config, identifier, value, negative, important);
            }

            let myArray: any = [];

            let hello: any = "";

            if (chainedPseudo.length) {
                chainedPseudo.forEach((pseudo: any) => {
                    if (className.isGrouped) {
                        // console.log("getGroupedClasses", getGroupedClasses(className.identifier));
                        const matchedClasses = className.identifier.substring(
                            className.identifier.indexOf("[") + 1,
                            className.identifier.indexOf("]"),
                        );
                        // const matchedClasses = className.identifier.match(/(?<=\[).+?(?=\])/g)!;
                        const matchedClassesSegments = matchedClasses.split(" ");
                        // matchedClassesSegments.forEach((seg: string) => {
                        //     const { identifier: i, value: v } = filterClass(seg);
                        //     // myArray.push({
                        //     //     index: cssRules.length,
                        //     //     identifier: `${pseudo}:${i}-${v}`,
                        //     //     pseudo: pseudo,
                        //     // });
                        // });
                        myArray.push({
                            index: cssRules.length,
                            identifier: `${pseudo}:${className.identifier}`,
                            pseudo: pseudo,
                        });
                    } else {
                        myArray.push({
                            index: cssRules.length,
                            identifier: `${pseudo}:${className.identifier}`,
                            pseudo: pseudo,
                        });
                    }

                    hello += `${pseudo}:`;
                });
            } else {
                myArray.push({
                    index: cssRules.length,
                    identifier: `${className.identifier}`,
                    pseudo: null,
                });
            }

            const classObject = {
                index: cssRules.length,
                identifier: hello + className.identifier,
            };

            // console.log(myArray);
            let refinedClass = "";
            // https://mathiasbynens.be/notes/css-escapes
            const escapeThese = "~!@$%^&*()_+-=,./';:\"?><[]\\{}|`#"; // #\~\!\@\$\%\^\&\*\(\)\_\+-\=\,\.\/\'\;\:\"\?\>\<\[\]\\\{\}\|\`\#
            // The following characters are 'special' in CSS: !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, `, {, |, }, and ~.

            // console.log(ogclassName.identifier);

            myArray.forEach((e: any) => {
                let modifiedClass = cssEscape(ogclassName.identifier);
                // let modifiedClass = cssEscape(classObject.identifier);
                // modifiedClass = modifiedClass.replace(/\b\d/g, function (match) {
                //   return "\\0000" + match.charCodeAt(0).toString(16);
                // });
                // modifiedClass = modifiedClass.replaceAll(`${"\\"} `, `.`);
                // modifiedClass = classObject.identifier.replaceAll(":", `${"\\"}:`);
                // modifiedClass = modifiedClass.replaceAll("%", `${"\\"}%`);
                // modifiedClass = modifiedClass.replaceAll("!", `${"\\"}!`);
                // modifiedClass = modifiedClass.replaceAll("#", `${"\\"}#`);
                // modifiedClass = modifiedClass.replaceAll("$", `${"\\"}$`);
                // modifiedClass = modifiedClass.replaceAll("[", `${"\\"}[`);
                // modifiedClass = modifiedClass.replaceAll("]", `${"\\"}]`);
                // modifiedClass = modifiedClass.replaceAll("(", `${"\\"}(`);
                // modifiedClass = modifiedClass.replaceAll(")", `${"\\"})`);
                // modifiedClass = modifiedClass.replaceAll(",", `${"\\"},`);
                // modifiedClass = modifiedClass.replaceAll(".", `${"\\"}.`);
                // modifiedClass = modifiedClass.replaceAll(" ", `.`); // remove spaces
                // if (modifiedClass.startsWith("_"))
                //   modifiedClass = modifiedClass.replace(modifiedClass[0], `${"\\"}${modifiedClass[0]}`);

                refinedClass += groupHover
                    ? `${refinedClass ? ", " : ""}.group:hover .${modifiedClass}`
                    : `${refinedClass ? ", " : ""}.${modifiedClass}${e.pseudo ? `:${e.pseudo}` : ""}`;

                // console.log(refinedClass);
            });
            // look into a:is(:hover, :focus) {...} - pseudo grouping

            const debugRule = `.blueprint *:not(path):not(g) {
          color: hsla(210, 100%, 100%, 0.9) !important;
          background: hsla(210, 100%, 50%, 0.5) !important;
          outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
          box-shadow: none !important;
          filter: none !important;
        }`;

            const rule = identifier === "blueprint" ? debugRule : `${refinedClass} { ${cssRule} }`;

            const sheetCopy = [...cssRules];
            const duplicateClass = sheetCopy.filter((e: any) => e.selectorText === refinedClass);
            const duplicateDebug = sheetCopy.filter((e: any) => e.selectorText === ".blueprint :not(path):not(g)");

            // if (duplicateClass.length) {
            //     sheet?.deleteRule(classObject.index);
            //     classObject.index = classObject.index - 1;
            // }
            const formattedRule = xs
                ? `@media (max-width: 576px) { ${rule} }`
                : sm
                ? `@media (min-width: 576px) { ${rule} }`
                : md
                ? `@media (min-width: 768px) { ${rule} }`
                : lg
                ? `@media (min-width: 992px) { ${rule} }`
                : xl
                ? `@media (min-width: 1200px) { ${rule} }`
                : xxl
                ? `@media (min-width: 1400px) { ${rule} }`
                : rule;

            // console.log(formattedRule);
            // const formattedRule = sm
            //   ? `@media only screen and (max-width: 600px) { ${rule} }`
            //   : md
            //   ? `@media only screen and (min-width: 768px) { ${rule} }`
            //   : rule;
            sheet?.insertRule(formattedRule, classObject.index);
            // }

            classList += (classList ? " " : "") + classObject.identifier;
        } else {
            if (config?.showErrors) console.warn(`SHONAUI: Invalid token: ${className.identifier}`);
        }
    });

    // sheet?.insertRule(`.debug *:not(path):not(g) {
    //   color: hsla(210, 100%, 100%, 0.9) !important;
    //   background: hsla(210, 100%, 50%, 0.5) !important;
    //   outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
    //   box-shadow: none !important;
    //   filter: none !important;
    // }`);

    // console.log(sheet.cssRules);

    return classList;
};
