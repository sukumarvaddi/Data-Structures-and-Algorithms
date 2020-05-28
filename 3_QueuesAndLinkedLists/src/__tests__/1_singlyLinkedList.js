const singlyLinkedList = require('../1_singlyLinkedList/singlyLinkedList');

describe('Test Singly Linked List', () => {
    it('Insert at beginning of an empty linked list', () => {});
    const linkedList = singlyLinkedList();
    expect(linkedList.getSize()).toBe(0);
    expect(linkedList.contains(5)).toBeFalsy();
    linkedList.insertAtBeginning(5);
    expect(linkedList.getSize()).toBe(1);
    expect(linkedList.contains(5)).toBeTruthy();
    expect(linkedList.isEmpty()).toBeFalsy();
});
