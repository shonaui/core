interface iHandler {
    (config: any, key: string, value: string): string;
}
export declare const Color: (config: any, key: string, value: string, dark: boolean) => string;
export declare const Size: iHandler;
export declare const Justify: (value: string) => string;
export declare const Direction: (value: string) => "" | "row" | "column" | "row-reverse" | "column-reverse";
export declare const Flex: iHandler;
export declare const Items: (value: string) => string;
export declare const Self: (value: string) => "center" | "flex-start" | "flex-end" | "stretch" | "auto" | null;
export declare const Decoration: (value: string) => "none" | "underline" | "line-through" | null;
export declare const No: (value: string) => "user-select: none;-ms-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-webkit-touch-callout: none;" | "user-drag: none;-o-user-drag: none;-moz-user-drag: none;-khtml-user-drag: none;-webkit-user-drag: none;" | "outline: none;" | "border: none;" | "overflow: clip;" | "text-decoration: none;" | "box-shadow: 0 0 #0000;" | "filter: drop-shadow(0 0 #0000);" | "appearance: none;" | null;
export declare const BoxShadow: (value: string) => string | null;
export declare const BGGradient: (value: string) => string | null;
export declare const TextGradient: (value: string) => string;
export {};
