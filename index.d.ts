/**
 * Returns `value` if `value` is an array, otherwise wraps `value`
 * in an array before returning it.
 *
 * @param value A value of type T, or an array of items of type T
 * @returns An array of items of type T
 */
declare function ensureArray<T>(value: T | T[]): T[];

/**
 * Randomly returns either `a` or `b`
 * @param a
 * @param b
 * @returns `a` or `b`
 */
declare function flip<A, B>(a: A, b: B): A | B;

/**
 *
 * @param target The class constructor to evaluate
 * @returns A list of `target`'s parent constructors.
 */
declare function getPrototypeChain<T>(target: T): T[];

declare function listOf<T>(count: number, fn: (index: number) => T): T[];

/**
 * Performs a shallow merge of `a` and `b`.
 *
 * @param a The base object
 * @param b The object to merge onto `a`
 * @returns A shallow merge of `a` and `b`
 */
declare function merge<A extends object, B extends object>(a: A | undefined, b: B | undefined): (A & B) | undefined;

type Values<T extends object> = T[keyof T];
type Constructor<T = any> = new (...args: any[]) => T;
type MaybeArray<T> = T | T[];
type AnyFunction = (...args: any[]) => any;

export { AnyFunction, Constructor, MaybeArray, Values, ensureArray, flip, getPrototypeChain, listOf, merge };
