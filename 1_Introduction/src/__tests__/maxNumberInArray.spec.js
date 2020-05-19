const { findMax } = require('../maxNumberInArray');

describe('Test suit to find a maximum number in Array', () => {
    it('list With one element', () => {
        let input = [1];
        expect(findMax(input)).toBe(1);
    });

    it('list with 0 elements throws Error', () => {
        expect(() => {
            findMax([]);
        }).toThrow(new Error('Either not a list or List has no numbers'));
    });

    it('list with first Element as maximum no', () => {
        expect(findMax([1000, 23, 45])).toBe(1000);
    });

    it('list with last Element in the list as maximum no', () => {
        expect(findMax([12, 43, 10, 3, 2000])).toBe(2000);
    });

    it('list with max number be any where', () => {
        expect(findMax([89, 56, 23, 89, 782, 7])).toBe(782);
    });

    it('list with all the elements being same number', () => {
        expect(findMax([90, 90, 90, 90, 90]));
    });

    it('list with both positive and negative integers', () => {
        expect(findMax([-12, -17, -8, 0, 1, -1000])).toBe(1);
    });

    it('list with all negative numbers', () => {
        expect(findMax([-1000, -982, -89, -100000])).toBe(-89);
    });
});
