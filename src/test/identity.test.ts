import { identity } from "../lib/identity";

describe('identity', () => {
    it('should return the input', () => {
        const input = {};

        expect(identity(input)).toBe(input);
    });
})