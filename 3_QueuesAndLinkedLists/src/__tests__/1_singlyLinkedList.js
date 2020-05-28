const singlyLinkedList = require('../1_singlyLinkedList/singlyLinkedList');

describe('Test Singly Linked List', () => {
    it('Insert at beginning of an empty linked list', () => {
        const linkedList = singlyLinkedList();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.contains(5)).toBeFalsy();
        linkedList.insertAtBeginning(5);
        expect(linkedList.getSize()).toBe(1);
        expect(linkedList.contains(5)).toBeTruthy();
        expect(linkedList.isEmpty()).toBeFalsy();
    });
    it('Insert at beginning of non EmptyLinked List', () => {
        const linkedList = singlyLinkedList();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.contains(5)).toBeFalsy();
        linkedList.insertAtBeginning(5);
        linkedList.insertAtBeginning(6);
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.contains(5)).toBeTruthy();
        expect(linkedList.contains(6)).toBeTruthy();
        expect(linkedList.contains(7)).toBeFalsy();
        expect(linkedList.isEmpty()).toBeFalsy();
        expect(linkedList.print()).toBe('6 5');
    });
});
