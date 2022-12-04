import { ensureArray } from "../lib/ensure-array";

describe('ensureArray', () => {
    const value = 'hello';
    const arrayValue = ['hello'];

    it('should return the value unchanged if it is an array', () => {
        expect(ensureArray(arrayValue)).toBe(arrayValue);
    });

    it('should wrap the value in an array', () => {
        expect(ensureArray(value)).toMatchObject(arrayValue);
    });
})