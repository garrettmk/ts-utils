import { Constructor } from "./types";
import { isConstructor } from "./is-constructor";
import { getPrototypeChain } from "./get-prototype-chain";

export function doesExtend<T extends Constructor, E extends T>(base: T, obj: unknown): obj is E {
    if (obj === base) {
        return true;
    } else  if (isConstructor(obj)) {
        const prototypes = getPrototypeChain(obj);
        return prototypes.some(proto => obj.prototype instanceof proto);
    }
    
    return false;
}