import { listOf } from "../lib/list-of"

describe('listOf', () => {
    const callback = jest.fn().mockImplementation((idx: number) => `${idx}`);
    const length = 3;
    const expectedCalls = [[0], [1], [2]];
    const expectedResult = ['0', '1', '2'];

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('should create a list of the given length', () => {
        const result = listOf(length, callback);

        expect(result.length).toBe(length);
    });

    it('should call the callback for each index', () => {
        const result = listOf(length, callback);

        expect(callback.mock.calls).toMatchObject(expectedCalls);
    });

    it('should fill the array with the results of callback', () => {
        const result = listOf(length, callback);

        expect(result).toMatchObject(expectedResult);
    });
})