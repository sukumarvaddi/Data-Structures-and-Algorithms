const { v1, v2 } = require('../insertionSort');

describe('Testing increasing Order using Insertion Sort withe version v1', () => {
    it('test v1 with one number list', () => {
        expect(v1([-1])).toEqual([-1]);
    });
    it('test v1 with emptyList', () => {
        expect(v1([])).toEqual([]);
    });

    it('test v1 with decreasing order of numbers', () => {
        expect(v1([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1])).toEqual([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('test v1 with increasing order of numbers', () => {
        expect(v1([-5 - 1, 0, 2, 5, 90, 1000, 2000])).toEqual([-5 - 1, 0, 2, 5, 90, 1000, 2000]);
    });
});

describe('Testing increasing Order using Insertion Sort with version v2', () => {
    it('test v2 with one number list', () => {
        expect(v2([-1])).toEqual([-1]);
    });
    it('test v2 with emptyList', () => {
        expect(v2([])).toEqual([]);
    });

    it('test v2 with decreasing order of numbers', () => {
        expect(v2([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1])).toEqual([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('test v2 with increasing order of numbers', () => {
        expect(v2([-5 - 1, 0, 2, 5, 90, 1000, 2000])).toEqual([-5 - 1, 0, 2, 5, 90, 1000, 2000]);
    });
});
