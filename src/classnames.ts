const classnames = [
    {
        aliases: ["text-color", "tc"],
        keys: ["color"],
        handler: "color",
    },
    {
        aliases: ["text-size", "ts"],
        keys: ["font-size"],
        handler: "size",
    },
    {
        aliases: ["text-align", "ta"],
        keys: ["text-align"],
        handler: null,
    },
    {
        aliases: ["font-weight", "fw"],
        keys: ["font-weight"],
        handler: null,
    },

    {
        aliases: ["margin", "m"],
        keys: ["margin"],
        handler: "size",
    },
    {
        aliases: ["margin-x", "mx"],
        keys: ["margin-left", "margin-right"],
        handler: "size",
    },
    {
        aliases: ["margin-top", "mt"],
        keys: ["margin-top"],
        handler: "size",
    },
    {
        aliases: ["margin", "m"],
        keys: ["margin"],
        handler: "size",
    },
    {
        aliases: ["text-decoration", "td"],
        keys: ["text-decoration"],
        handler: null,
    },
    {
        aliases: ["background-color", "bg"],
        keys: ["background-color"],
        handler: "color",
    },
    {
        aliases: ["padding", "p"],
        keys: ["padding"],
        handler: "size",
    },
    {
        aliases: ["padding-horizontal", "px"],
        keys: ["padding-left", "padding-right"],
        handler: "size",
    },
    {
        aliases: ["cursor"],
        keys: ["cursor"],
        handler: null,
    },
    {
        aliases: ["display"],
        keys: ["display"],
        handler: null,
    },
    {
        aliases: ["height", "h"],
        keys: ["height"],
        handler: "size",
    },
    {
        aliases: ["max-height", "max-h"],
        keys: ["max-height"],
        handler: "size",
    },
    {
        aliases: ["min-height", "min-h"],
        keys: ["min-height"],
        handler: "size",
    },
    {
        aliases: ["width", "w"],
        keys: ["width"],
        handler: "size",
    },
    {
        aliases: ["max-width", "max-w"],
        keys: ["max-width"],
        handler: "size",
    },
    {
        aliases: ["min-width", "min-w"],
        keys: ["min-width"],
        handler: "size",
    },
    {
        aliases: ["justify"],
        keys: ["justify-content"],
        handler: "justify",
    },
    {
        aliases: ["items"],
        keys: ["align-items"],
        handler: "items",
    },
    {
        aliases: ["top"],
        keys: ["top"],
        handler: "size",
    },
    {
        aliases: ["bottom"],
        keys: ["bottom"],
        handler: "size",
    },
    {
        aliases: ["left"],
        keys: ["left"],
        handler: "size",
    },
    {
        aliases: ["right"],
        keys: ["right"],
        handler: "size",
    },

    /**************************
     * * * * * BORDER * * * * *
     **************************/

    {
        aliases: ["border-style", "bs"],
        keys: ["border-style"],
        handler: null,
    },
    {
        aliases: ["border-width", "bw"],
        keys: ["border-width"],
        handler: "size",
    },
    {
        aliases: ["border-color", "bc"],
        keys: ["border-color"],
        handler: "color",
    },
    {
        aliases: ["radius", "r"],
        keys: ["border-radius"],
        handler: "size",
        prefix: true,
    },

    /**************************
     * * * * * OUTLINE * * * * *
     **************************/

    {
        aliases: ["outline"],
        keys: ["outline"],
        handler: null,
    },

    /**************************
     * * * * * OVERFLOW * * * * *
     **************************/

    {
        aliases: ["overflow"],
        keys: ["overflow"],
        handler: null,
    },

    /**************************
     * *  NOT * * *
     **************************/
    {
        aliases: ["no"],
        keys: ["no"],
        handler: "no",
    },

    /**************************
     * *  SPECIAL CLASSES * * *
     **************************/

    // .clearfix
    // .clearfix::after {
    //     display: block;
    //     clear: both;
    //     content: "";
    // }

    // INHERIT
    // inherit-color => color: inherit;
    // inherit-font => font-family: inherit;

    // .float
    // .float-right {
    //     float: right!important;
    // }
    // no-float - float-none
    // right,center

    // .center-block  /* margin: auto */

    // .center-block  /* margin: auto */
    // .clearfix
    // .text-{center,left,right,justify,nowrap}
    // .text-{lowercase,uppercase,capitalize}

    // .ratio .ratio-16x9

    // fixed-top,fixed-bottom,sticky-top

    // .truncate

    // text-start,text-center,text-end

    // text-wrap

    // bold - font-weight: 700 !important;
    // bolder - font-weight: bolder !important;
    // normal - font-weight: 400 !important;
    // light - font-weight: 300 !important;
    // lighter - font-weight: lighter !important;
    // normal - font-style: normal !important;

    // $line-height-base:            1.5;
    // $line-height-sm:              1.25;
    // $line-height-lg:              2;

    // vertical-align
    // baseline,top,middle,bottom,text-top,text-bottom

    // Visibility
    // .visible {
    // visibility: visible !important;
    // }
    // .invisible {
    // visibility: hidden !important;
    // }

    // border-image: url(border.png) 30 stretch;
    // border-image: url(border.png) 25 25 round;

    // border-image-source: url(border.png);
    //   border-image-slice: 20;
    // border-image-width: 20;
    // border-image-outset: 1;
    // border-image-repeat: round;

    // Elements can be sized according to their child element sizes using min-content, fit-content, and max-content dimensions.

    // .btn:not(:disabled):not(.disabled) {
    //     cursor: pointer;
    // }

    // .btn {
    //     display: inline-block;
    //     font-weight: 400;
    //     text-align: center;
    //     white-space: nowrap;
    //     vertical-align: middle;
    //     -webkit-user-select: none;
    //     -moz-user-select: none;
    //     -ms-user-select: none;
    //     user-select: none;
    //     border: 1px solid transparent;
    //     padding: 0.375rem 0.75rem;
    //     font-size: 1rem;
    //     line-height: 1.5;
    //     border-radius: 0.25rem;
    //     transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    // }

    // .alert {
    //     position: relative;
    //     padding: 0.75rem 1.25rem;
    //     margin-bottom: 1rem;
    //     border: 1px solid transparent;
    //     border-radius: 0.25rem;
    // }

    // .alert-primary {
    //     color: #004085;
    //     background-color: #cce5ff;
    //     border-color: #b8daff;
    // }

    // .badge {
    //     display: inline-block;
    //     padding: 0.25em 0.4em;
    //     font-size: 75%;
    //     font-weight: 700;
    //     line-height: 1;
    //     text-align: center;
    //     white-space: nowrap;
    //     vertical-align: baseline;
    //     border-radius: 0.25rem;
    // }

    // .badge-primary {
    //     color: #fff;
    //     background-color: #007bff;
    // }

    // .badge-pill {
    //     padding-right: 0.6em;
    //     padding-left: 0.6em;
    //     border-radius: 10rem;
    // }

    // .card {
    //     position: relative;
    //     display: -webkit-box;
    //     display: -ms-flexbox;
    //     display: flex;
    //     -webkit-box-orient: vertical;
    //     -webkit-box-direction: normal;
    //     -ms-flex-direction: column;
    //     flex-direction: column;
    //     min-width: 0;
    //     word-wrap: break-word;
    //     background-color: #fff;
    //     background-clip: border-box;
    //     border: 1px solid rgba(0,0,0,.125);
    //     border-radius: 0.25rem;
    // }

    // CUSTOM TOOLTIPS

    // <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
    // Tooltip on top
    // </button>

    {
        aliases: ["flex"],
        keys: ["display"],
        handler: "flex",
        value: "flex",
    },
    {
        aliases: ["group"],
        keys: [],
        handler: null,
        value: null,
    },

    {
        aliases: ["visible"],
        keys: ["visibility"],
        handler: null,
        value: "visible",
    },
    {
        aliases: ["invisible"],
        keys: ["visibility"],
        handler: null,
        value: "hidden",
    },

    {
        aliases: ["hidden"],
        keys: ["display"],
        handler: null,
        value: "none",
    },
    {
        aliases: ["show"],
        keys: ["display"],
        handler: null,
        value: "block",
    },

    {
        aliases: ["inline"],
        keys: ["display"],
        handler: null,
        value: "inline",
    },
    {
        aliases: ["inline-block"],
        keys: ["display"],
        handler: null,
        value: "inline-block",
    },
    {
        aliases: ["center"],
        keys: ["justify-content", "align-items"],
        handler: null,
        value: "center",
    },
    {
        aliases: ["bold"],
        keys: ["font-weight"],
        handler: null,
        value: "bold",
    },
    {
        aliases: ["underline"],
        keys: ["text-decoration"],
        handler: null,
        value: "underline",
    },
    {
        aliases: ["absolute"],
        keys: ["position"],
        handler: null,
        value: "absolute",
    },
    {
        aliases: ["relative"],
        keys: ["position"],
        handler: null,
        value: "relative",
    },
    {
        aliases: ["static"],
        keys: ["position"],
        handler: null,
        value: "static",
    },
    {
        aliases: ["fixed"],
        keys: ["position"],
        handler: null,
        value: "fixed",
    },
    // initial - Sets this property to its default value.
    // inherit - Inherits this property from its parent element.
    {
        aliases: ["sticky"],
        keys: ["position"],
        handler: null,
        value: "sticky",
    },
    {
        aliases: ["blueprint"],
        keys: ["blueprint"],
        handler: null,
        value: null,
    },
    {
        aliases: ["inspect"],
        keys: ["inspect"],
        handler: null,
        value: null,
    },
];

export default classnames;
