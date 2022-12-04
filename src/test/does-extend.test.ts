import { doesExtend } from "../lib/does-extend"

describe('doesExtend', () => {
    class Base {}
    class Child extends Base {}
    class Grandchild extends Child {}
    class Stranger {}

    it('shouldreturn true for the class itself', () => {
        expect(doesExtend(Base, Base)).toBe(true);
    });

    it('should return true for a direct descendant', () => {
        expect(doesExtend(Base, Child)).toBe(true);
    });

    it('should return true for a non-direct descendent', () => {
        expect(doesExtend(Base, Grandchild)).toBe(true);
    });

    it('should return false for an unrelated class', () => {
        expect(doesExtend(Base, Stranger)).toBe(false);
    });
})