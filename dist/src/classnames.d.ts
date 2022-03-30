declare const classnames: ({
    aliases: string[];
    keys: string[];
    handler: string;
    prefix?: undefined;
    value?: undefined;
} | {
    aliases: string[];
    keys: string[];
    handler: null;
    prefix?: undefined;
    value?: undefined;
} | {
    aliases: string[];
    keys: string[];
    handler: string;
    prefix: boolean;
    value?: undefined;
} | {
    aliases: string[];
    keys: string[];
    handler: string;
    value: string;
    prefix?: undefined;
} | {
    aliases: string[];
    keys: string[];
    handler: null;
    value: string;
    prefix?: undefined;
} | {
    aliases: string[];
    keys: string[];
    handler: null;
    value: null;
    prefix?: undefined;
})[];
export default classnames;
