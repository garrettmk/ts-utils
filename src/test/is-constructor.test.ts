import { isConstructor } from "../lib/is-constructor";

describe('isConstructor', () => {
    class TestClass {}
    const testFunction = () => 'yo';

    it('should return true for a class constructor', () => {
        expect(isConstructor(TestClass)).toBe(true);
    });

    it('should return false for a non-constructor function', () => {
        expect(isConstructor(testFunction)).toBe(false);
    });

    it('should return false for a non-function value', () => {
        expect(isConstructor('yo')).toBe(false);
    })
})