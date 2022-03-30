export const cssResetRules: string[] = [
    // # GitHub page: https://github.com/elad2412/the-new-css-reset
    /*
        Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
        - The "symbol *" part is to solve Firefox SVG sprite bug
    */
    "*:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {all: unset;display: revert;}",
    /* Preferred box-sizing value */
    "*,*::before,*::after {box-sizing: border-box;}",
    /* Reapply the pointer cursor for anchor tags */
    "a, button { cursor: revert;}",
    /* Remove list styles (bullets/numbers) */
    "ol, ul, menu { list-style: none; }",
    /* For images to not be able to exceed their container */
    "img { max-width: 100%;}",
    /* removes spacing between cells in tables */
    "table {border-collapse: collapse;}",
    /* revert the 'white-space' property for textarea elements on Safari */
    "textarea { white-space: revert;}",
    /* minimum style to allow to style meter element */
    "meter {-webkit-appearance: revert; appearance: revert;}",
    /* reset default text opacity of input placeholder */
    "::placeholder {color: unset;}",
    /* fix the feature of 'hidden' attribute.
   display:revert; revert to element instead of attribute */
    ":where([hidden]) { display: none;}",
    /* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly. */
    ":where([contenteditable]) {-moz-user-modify: read-write;-webkit-user-modify: read-write;overflow-wrap: break-word;-webkit-line-break: after-white-space;}",
    /* apply back the draggable feature - exist only in Chromium and Safari */
    ':where([draggable="true"]) {-webkit-user-drag: element;}',
    // # https://meyerweb.com/eric/tools/css/reset/reset.css
    `html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }`,
    /* HTML5 display-role reset for older browsers */
    `article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }`,
    `body {
        line-height: 1;
    }`,
    `ol, ul {
        list-style: none;
    }`,
    `blockquote, q {
        quotes: none;
    }`,
    `blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }`,
    `table {
        border-collapse: collapse;
        border-spacing: 0;
    }`,
];

export const cssNormalizeRules: string[] = [
    // # https://ageek.dev/normalize-css
    // # https://github.com/necolas/normalize.css/blob/master/normalize.css
    /* Correct the line height in all browsers. Prevent adjustments of font size after orientation changes in iOS. */
    "html { line-height: 1.15; -webkit-text-size-adjust: 100%;}",
    /* Remove the margin in all browsers. */
    "body {margin: 0;}",
    /* Improve consistency of default fonts in all browsers. */
    "body {font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';}",
    /* Render the main element consistently in IE. */
    "main {display: block;}",
    /* Correct the font size and margin on h1 elements within section and article contexts in Chrome, Firefox, and Safari. */
    "h1 {font-size: 2em;margin: 0.67em 0;}",
    /* Add the correct box sizing in Firefox, and show the overflow in Edge and IE. */
    "hr {box-sizing: content-box; height: 0; overflow: visible;}",
    /* Correct the inheritance and scaling of font size in all browsers, and correct the odd em font sizing in all browsers. */
    "pre {font-family: monospace, monospace;font-size: 1em;}",
    /* Remove the gray background on active links in IE 10. */
    "a {background-color: transparent;}",
    /* Remove the bottom border in Chrome 57-, and add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. */
    "abbr[title] {border-bottom: none;text-decoration: underline;text-decoration: underline dotted;}",
    /* Add the correct font weight in Chrome, Edge, and Safari. */
    "b,strong {font-weight: bolder;}",
    /* Correct the inheritance and scaling of font size in all browsers, and correct the odd em font sizing in all browsers. */
    "code,kbd,samp {font-family: monospace, monospace; font-size: 1em;}",
    /* Add the correct font size in all browsers. */
    "small {font-size: 80%;}",
    /* Prevent sub and sup elements from affecting the line height in all browsers. */
    "sub,sup {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;}",
    "sub {bottom: -0.25em;}",
    "sup {top: -0.5em;}",
    /* Remove the border on images inside links in IE 10. */
    "img {border-style: none;}",
    /* Change the font styles in all browsers, and remove the margin in Firefox and Safari. */
    "button,input,optgroup,select,textarea {font-family: inherit;font-size: 100%;line-height: 1.15;margin: 0;}",
    /* Show the overflow in Edge. */
    "button,input {overflow: visible;}",
    /* Remove the inheritance of text transform in Firefox. */
    "button,select {text-transform: none;}",
    /* Correct the inability to style clickable types in iOS and Safari. */
    "button,[type='button'],[type='reset'],[type='submit'] {-webkit-appearance: button;}",
    /* Remove the inner border and padding in Firefox. */
    "button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner {border-style: none;padding: 0;}",
    /* Restore the focus styles unset by the previous rule. */
    "button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring {outline: 1px dotted ButtonText;}",
    /* Correct the padding in Firefox. */
    "fieldset {padding: 0.35em 0.75em 0.625em;}",
    /* Correct the text wrapping in Edge and IE. Correct the color inheritance from fieldset elements in IE. Remove the padding so developers are not caught out when they zero out fieldset elements in all browsers. */
    "legend {box-sizing: border-box;color: inherit;display: table;max-width: 100%;padding: 0;white-space: normal;}",
    /* Add the correct vertical alignment in Chrome, Firefox, and Opera. */
    "progress {vertical-align: baseline;}",
    /* Remove the default vertical scrollbar in IE 10+. */
    "textarea {overflow: auto;}",
    /* Add the correct box sizing in IE 10. Remove the padding in IE 10. */
    "[type='checkbox'],[type='radio'] {box-sizing: border-box; padding: 0; }",
    /* Correct the cursor style of increment and decrement buttons in Chrome. */
    "[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button {height: auto;}",
    /* Correct the odd appearance in Chrome and Safari. Correct the outline style in Safari. */
    "[type='search'] {-webkit-appearance: textfield; outline-offset: -2px;}",
    /* Remove the inner padding in Chrome and Safari on macOS. */
    "[type='search']::-webkit-search-decoration {-webkit-appearance: none;}",
    /* Correct the inability to style clickable types in iOS and Safari. Change font properties to inherit in Safari. */
    "::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}",
    /* Add the correct display in Edge, IE 10+, and Firefox. */
    "details {display: block;}",
    /* Add the correct display in all browsers. */
    "summary {display: list-item;}",
    /* Add the correct display in IE 10+. */
    "template {display: none;}",
    /* Add the correct display in IE 10. */
    "[hidden] {display: none !important;}",
];
