const { DynamicSet } = require('../dynamicSetADT');

describe('test the axioms of dynamic test', () => {
    // testing the axiom isIn(New(), v) = false
    it('test the presence of element in a newly created Set', () => {
        expect(new DynamicSet().isIn(5)).toBeFalsy();
    });
    // isIn(insert(S,v),v) = true
    it('test the presence of element in set After inserting an element in the set', () => {
        let testSet = new DynamicSet();
        testSet.insert(5);
        expect(testSet.isIn(5)).toBeTruthy();
    });

    // To prove the axiom isIn(insert(S, u),v) = isIn(S, v) where u!=v
    it('test the presence of element in set After inserting an element in the set', () => {
        let testSet = new DynamicSet();
        testSet.insert(5);
        expect(testSet.isIn(7)).toBe(testSet.isIn(7));
        testSet.insert(7);
        expect(testSet.isIn(7)).toBe(testSet.isIn(7));
        testSet.insert(9);
        expect(testSet.isIn(7)).toBe(testSet.isIn(7));
    });
    // isIn(delete(S,v),v) = false and IsIn(Delete(S,v),v) = IsIn(s,v);
    it('test the presence of the element after deleting the element in the set', () => {
        let testSet = new DynamicSet();
        testSet.insert(5);
        testSet.insert(6);
        testSet.insert(8);
        testSet.delete(8);
        expect(testSet.isIn(8)).toBeFalsy();
        expect(testSet.isIn(10)).toBe(testSet.isIn(10));
        expect(testSet.isIn(5)).toBe(testSet.isIn(5));
        testSet.insert(5);
        testSet.delete(5);
        expect(testSet.isIn(5)).toBe(testSet.isIn(5));
    });
});
