import { enumValues } from "../lib/enum-values";

describe('enumValues', () => {
    const enumObj = {
        'one': 1,
        'two': 2,
        'three': 3
    };

    const expected = Object.values(enumObj);

    it('should return the object\'s values', () => {
        expect(enumValues(enumObj)).toMatchObject(expected);
    });
})