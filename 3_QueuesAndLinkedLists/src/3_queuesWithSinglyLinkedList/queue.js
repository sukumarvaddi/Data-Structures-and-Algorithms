const linkedList = require('../1_singlyLinkedList/singlyLinkedList');

function queue() {
    return {
        enqueue,
        dequeue,
        front,
        size,
        isEmpty,
    };

    function enqueue(el) {
        linkedList.insertAtEnd(el);
    }
    function dequeue() {
        linkedList.deleteNodeAtGivenPosition(0);
    }

    function front() {
        linkedList.getAtHead();
    }

    function size() {
        linkedList.getSize();
    }

    function isEmpty() {
        return linkedList.getSize() === 0;
    }
}
