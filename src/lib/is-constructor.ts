import { Constructor } from "./types";

export function isConstructor(value: unknown): value is Constructor {
    return typeof value === 'function' && 'prototype' in value;
}