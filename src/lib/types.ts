export type Values<T extends object> = T[keyof T];

export type Constructor<T = any> = new (...args: any[]) => T

export type MaybeArray<T> = T | T[];

export type AnyFunction = (...args: any[]) => any;

