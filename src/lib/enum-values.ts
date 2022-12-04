import { EnumObject, Values } from "./types";

export function enumValues<T extends EnumObject>(enumObj: T): Values<T>[] {
    return Object.values(enumObj);
}