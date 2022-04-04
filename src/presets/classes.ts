const BASIC_CLASS_TYPE = "basic";
const HELPER_CLASS_TYPE = "helper";
const SPECIAL_CLASS_TYPE = "helper";

export const classPresets = [
    // BOX SHADOWS
    {
        key: "box-shadow",
        value: "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
        type: HELPER_CLASS_TYPE,
    },
    {
        key: "box-shadow-sm",
        value: "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);",
        type: HELPER_CLASS_TYPE,
    },
    {
        key: "box-shadow-md",
        value: "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
        type: HELPER_CLASS_TYPE,
    },
    {
        key: "box-shadow-lg",
        value: "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
        type: HELPER_CLASS_TYPE,
    },
    {
        key: "box-shadow-none",
        value: "box-shadow: 0 0 #0000;",
        type: HELPER_CLASS_TYPE,
    },
    // DROP SHADOWS
    {
        key: "drop-shadow",
        value: "filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));",
        type: HELPER_CLASS_TYPE,
    },
    {
        key: "drop-shadow-sm",
        value: "filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));",
        type: HELPER_CLASS_TYPE,
    },
    {
        key: "drop-shadow-md",
        value: "filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));",
        type: HELPER_CLASS_TYPE,
    },
    {
        key: "drop-shadow-lg",
        value: "filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));",
        type: HELPER_CLASS_TYPE,
    },
    {
        key: "drop-shadow-none",
        value: "filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));",
        type: HELPER_CLASS_TYPE,
    },
];
