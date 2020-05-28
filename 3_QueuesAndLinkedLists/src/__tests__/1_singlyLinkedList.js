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
    it('Insert at beginning of linked list', () => {
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
    it('Insert after given value in an empty linked list', () => {
        const linkedList = singlyLinkedList();
        expect(linkedList.getSize()).toBe(0);
        linkedList.insertAfterGivenValue(5, 6);
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.contains(5)).toBeFalsy();
        expect(linkedList.contains(6)).toBeFalsy();
    });
    it('Insert after given value in linked list', () => {
        const linkedList = singlyLinkedList();
        expect(linkedList.getSize()).toBe(0);
        linkedList.insertAtBeginning(5);
        expect(linkedList.print()).toBe('5');
        linkedList.insertAfterGivenValue(5, 6);
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.contains(5)).toBeTruthy();
        expect(linkedList.contains(6)).toBeTruthy();
        expect(linkedList.print()).toBe('5 6');
    });

    it('Insert at the end of an linked list', () => {
        const linkedList = singlyLinkedList();
        expect(linkedList.getSize()).toBe(0);
        linkedList.insertAtEnd(5);
        expect(linkedList.print()).toBe('5');
        expect(linkedList.getSize()).toBe(1);
        linkedList.insertAtEnd(7);
        expect(linkedList.print()).toBe('5 7');
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.contains(7)).toBeTruthy();
        expect(linkedList.isEmpty()).toBeFalsy();
    });

    it('Delete node with a given value', () => {
        const linkedList = singlyLinkedList();
        expect(linkedList.getSize()).toBe(0);
        linkedList.insertAtEnd(5);
        linkedList.insertAtEnd(6);
        expect(linkedList.print()).toBe('5 6');
        expect(linkedList.getSize()).toBe(2);
        linkedList.deleteNodeWithGivenValue(7);
        expect(linkedList.print()).toBe('5 6');
        expect(linkedList.getSize()).toBe(2);
        linkedList.deleteNodeWithGivenValue(6);
        expect(linkedList.print()).toBe('5');
        expect(linkedList.getSize()).toBe(1);
        linkedList.deleteNodeWithGivenValue(5);
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.print()).toBe('');
    });

    it('Delete Node at the Given Position', () => {
        const linkedList = singlyLinkedList();
        expect(linkedList.getSize()).toBe(0);
        linkedList.deleteNodeAtGivenPosition(0);
        expect(linkedList.getSize()).toBe(0);
        linkedList.insertAtEnd(5);
        linkedList.insertAtEnd(6);
        linkedList.deleteNodeAtGivenPosition(0);
        expect(linkedList.getSize()).toBe(1);
        expect(linkedList.print()).toBe('6');
        linkedList.insertAtBeginning(5);
        linkedList.insertAtEnd(6);
        linkedList.insertAtEnd(7);
        linkedList.insertAtEnd(8);
        linkedList.insertAtEnd(9);
        linkedList.deleteNodeAtGivenPosition(4);
        expect(linkedList.getSize()).toBe(6);
        expect(linkedList.print()).toBe('5 6 6 7 8 9');
    });
    it('Delete Linked List', () => {
        const linkedList = singlyLinkedList();
        expect(linkedList.getSize()).toBe(0);
        linkedList.insertAtEnd(5);
        linkedList.insertAtEnd(6);
        linkedList.insertAtEnd(7);
        linkedList.insertAtEnd(8);
        linkedList.insertAtEnd(9);
        linkedList.deleteLinkedList();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.print()).toBe('');
    });
});
