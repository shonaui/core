import { Color, Size, Justify, Items, Flex, No, BoxShadow, BGGradient, TextGradient } from "./handlers";

import classnames from "./classnames";

const resolveHandler = (
    config: any,
    handler: string,
    key: string,
    value: any,
    negative: boolean,
    important: boolean,
    dark: boolean,
) => {
    return handler === "color"
        ? `${key}: ${Color(config, key, value, dark)};`
        : handler === "size"
        ? `${key}: ${negative ? "-" : ""}${Size(config, key, value)}${important ? " !important" : ""};`
        : handler === "justify"
        ? `justify-content: ${Justify(value)}${important ? " !important" : ""};`
        : handler === "items"
        ? `align-items: ${Items(value)}${important ? " !important" : ""};`
        : handler === "box-shadow"
        ? BoxShadow(value)
        : handler === "bg-gradient"
        ? BGGradient(value)
        : handler === "text-gradient"
        ? TextGradient(value)
        : handler === "no"
        ? No(value)
        : handler === "flex"
        ? Flex(config, key, value)
        : `${key}: ${value}${important ? " !important" : ""};`;
};

export const resolver = (
    config: any,
    identifier: string,
    value: string,
    negative: boolean,
    important: boolean,
    dark: boolean,
) => {
    const result: any = {};

    const token: any = classnames.find((e) => e.aliases.includes(identifier));

    if (!value) {
        let classString = "";
        token.keys.forEach((key: string) => {
            classString += `${key}: ${token.value}${important ? " !important" : ""}; `;
        });

        result[identifier] = classString;
    } else {
        token.aliases.forEach((alias: string) => {
            let cup: any = "";
            token.keys.forEach((key: string) => {
                cup += resolveHandler(config, token.handler, key, value, negative, important, dark);
            });
            result[alias] = cup;
        });
    }

    return result[identifier];
};
