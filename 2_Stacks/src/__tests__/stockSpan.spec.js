const findStockSpan = require('../stockSpan');

describe('Test stock span', () => {
    it('test decreasing stock price', () => {
        const stockSpan = findStockSpan([10, 9, 8, 7, 6, 5]);
        expect(stockSpan).toEqual([1, 1, 1, 1, 1, 1]);
    });

    it('test increasing stock price', () => {
        const stockSpan = findStockSpan([1, 2, 3, 4, 5, 6]);
        expect(stockSpan).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('test increasing stock price', () => {
        const stockSpan = findStockSpan([1, 2, 3, 4, 5, 6]);
        expect(stockSpan).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('empty', () => {
        const stockSpan = findStockSpan([]);
        expect(stockSpan).toEqual([]);
    });

    it('test random order stock span', () => {
        const stockSpan = findStockSpan([8, 6, 2, 3, 3, 4, 7]);
        expect(stockSpan).toEqual([1, 1, 1, 2, 3, 4, 6]);
    });
});
