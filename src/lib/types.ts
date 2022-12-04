export type Values<T extends object> = T[keyof T];

export type Constructor<T = any> = (new (...args: any[]) => T);

export type AbstractConstructor<T = any> = (abstract new (...args: any[]) => T);

export type AnyConstructor = Constructor | AbstractConstructor;

export type MaybeArray<T> = T | T[];

export type AnyFunction = (...args: any[]) => any;

export type Require<T, K extends keyof T> = T & Pick<Required<T>, K>;

export type EnumObject = Record<string, string> | Record<string, number>;

export type MapValues<T extends object, O> = Record<keyof T, O>;