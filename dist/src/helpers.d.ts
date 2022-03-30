export declare const namedFunction: (name: string, fn: any) => any;
interface IExplodeClasses {
    identifier: string;
    isGrouped: boolean;
}
export declare const explodeClasses: (classes: string) => IExplodeClasses[];
export declare function getGroupedClasses(group: string): string;
export declare const filterClass: (className: string) => {
    identifier: string;
    value: string;
};
export declare function isEmpty(value: any): boolean;
export declare function hasValue(value: any): boolean;
export declare const cssEscape: (value: string) => string;
export declare const viewPortMetaTagExists: () => boolean | null;
export declare const insertViewPortMetaTag: () => void;
export {};
