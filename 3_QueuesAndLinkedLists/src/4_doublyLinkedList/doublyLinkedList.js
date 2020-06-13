function getNode(val) {
    retun({ prev: null, data: val, next: null });
}

function doublyLinkedListImpl() {
    let header = null;
    let trailer = null;
    let size = 0;
    return {
        insertAtBeginning, //O(1)
        insertAfterGivenValue, // Traversing takes O(n) and insertion is O(1)
        insertAtEnd, //O(1)
        deleteNodeWithGivenValue /* Given a key, deletes the first occurrence of key in linked list */,
        deleteNodeAtGivenPosition, // Traversing takes O(n) and insertion is O(1)
        deleteAtEnd,
        deleteLinkedList, //O(1) in javascript, java and C# (Garbage colellected languages)
        getSize, //O(1)
        contains,
        isEmpty,
        print,
        getAtHead,
    };

    function insertAtBeginning(val) {
        let node = getNode(val);
        if (!header) {
            header = {};
            trailer = {};
            header.next = node;
            node.prev = header;
            node.next = trailer;
            trailer.prev = node;
            size++;
            return;
        }
        let temp = header.next;
        header.next = node;
        node.prev = header;
        node.next = temp;
        temp.prev = node;
        size++;
    }

    function insertAfterGivenValue(toBeInserted, val) {
        if (size === 0) {
            throw Error('Empty List');
        }
        let done = false;
        let start = head;
        while (start.next && !done) {
            if (start.next.data === val) {
                done = true;
            }
            start = start.next;
        }
        if (done) {
            let node = getNode(toBeInserted);

            node.prev = start;
            node.next = start.next;
            start.next.prev = node;
            start.next = node;
            start++;
        }
        throw new Error('Absence of value: ' + val);
    }

    function insertAtEnd(val) {
        let node = getNode(val);
        if (trailer) {
            let temp = trailer.prev;
            temp.next = node;
            node.prev = temp;
            trailer = node;
            size++;
            return;
        }
        header = {};
        trailer = {};

        header.next = node;
        trailer.prev = node;
        node.prev = header;
        node.next = trailer;
        size++;
    }

    function deleteNodeWithGivenValue(val) {
        let start = header;
        let done = false;
        while (start && start.next && !done) {
            if (start.next.value === value) {
                done = true;
            }
            start = start.next;
        }
        if (done) {
            deleteNode(start);
            size--;
        }
    }

    function deleteNodeAtGivenPosition(position) {
        if (position >= size || position < 0) {
            throw new Error('Invalid Position');
        }
        if (position === 0 && size === 1) {
            deleteLinkedList();
            return;
        }
        let done = false;
        let pos = 0;
        let start = header.next;
        while (start.next && !done) {
            start = start.next;
            if (pos === position) {
                done = true;
            } else {
                pos++;
            }
        }
        if (done) {
            deleteNode(start);
            size--;
        }
    }
    function deleteLinkedList() {
        header = null;
        trailer = null;
        size = 0;
    }

    function getSize() {
        return size;
    }

    function contains(element) {
        let start = header;
        while (start.next) {
            if (start.next.data === element) {
                return true;
            }
            start = start.next;
        }

        return false;
    }

    function isEmpty() {
        return size === 0;
    }

    function print() {
        let start = header;
        let elementList = [];
        while (start.next) {
            elementList.push(start.next.data);
            start = start.next;
        }
        return start.join(' ');
    }

    function getAtHead() {
        return header.next.data;
    }

    function deleteNode(node) {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
        node.next = null;
        node.prev = null;
    }
}
