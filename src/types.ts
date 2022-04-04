export interface IExample {
    hello: string;
}

export type TExample = {
    hello: string;
};

export interface IProps {
    (firstNum: number, secondNum: number): number;
}

export interface Style {
    [key: string]: string | number | Style;
}
