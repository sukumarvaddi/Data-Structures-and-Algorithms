const { stack } = require('../stack');

describe('Testing Stack', () => {
    it('retrieving the top of empty stack', () => {
        let stackObj = stack();
        expect(() => {
            stackObj.top();
        }).toThrow(new Error('Stack Empty'));
    });

    it('Popping Empty Stack', () => {
        let stackObj = stack();
        expect(() => {
            stackObj.pop();
        }).toThrow(new Error('Stack Empty'));
    });

    it('pushing an element into an empty stack', () => {
        let stackObj = stack();
        stackObj.push(5);
        expect(stackObj.size()).toBe(1);
    });

    it('pushing an element into a stack and verify the size', () => {
        let stackObj = stack();
        stackObj.push(34);
        stackObj.push(65);
        expect(stackObj.size()).toBe(2);
        expect(stackObj.top()).toBe(65);
        expect(stackObj.isEmpty()).toBeFalsy();
        stackObj.pop();
        expect(stackObj.size()).toBe(1);
        expect(stackObj.top()).toBe(34);
        expect(stackObj.isEmpty()).toBeFalsy();
        stackObj.pop();
        expect(stackObj.isEmpty()).toBeTruthy();
        expect(stackObj.size()).toBe(0);
        expect(() => {
            stackObj.pop();
        }).toThrow(new Error('Stack Empty'));
        expect(() => {
            stackObj.top();
        }).toThrow(new Error('Stack Empty'));
    });
});
