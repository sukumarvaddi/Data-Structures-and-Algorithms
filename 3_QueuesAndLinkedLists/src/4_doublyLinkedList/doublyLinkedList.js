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
        insertAtEnd, //O(n)
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
            node.prev = header;
            header.next = node;
            node.next = trailer;
            trailer.prev = node;
            size++;
            return;
        }
        let temp = header.next;
        node.next = header.next;
        node.prev = header;
        header.next = node;
        temp.prev = node;
        size++;
    }

    function insertAfterGivenValue(val) {
        if (size === 0) {
            throw Error('Empty List');
        }
        let done = false;
        let start = head;
        while (start.next && !done) {
            if (start.next.val === val) {
                done = true;
            }
            start = start.next;
        }
        if (done) {
            let node = getNode(val);
            node.next = start.next;
            node.next.prev = node;
            start.next = node;
            node.prev = start;
        }
        start++;
    }

    function insertAtEnd(val) {
        let node = getNode(val);
        if (trailer) {
            trailer.prev.next = node;
            node.prev = trailer.prev;
            trailer.prev = node;
            return;
        }
        header = {};
        trailer = {};

        header.next = node;
        trailer.prev = node;
        size++;
    }

    function deleteNodeWithGivenValue(val) {
        let start = header;
        let done = false;
        while (start.next && !done) {
            if (start.next.value === value) {
                done = true;
            }
            start = start.next;
        }
        if (done) {
            let prev = start.prev;
            let next = start.next;
            prev.next = next;
            next.prev = prev;
            start.prev = null;
            start.next = null;
        }
        size--;
    }

    function deleteNodeAtGivenPosition(position) {
        if (position >= size || position < 0) {
            throw new Error('Invalid Position');
        }
        if (position === 0) {
            let temp = header.next.next;
            temp.prev = header;
            header.next = temp;
            size--;
            return temp;
        }
        let tempPos = 0;
        let start = header.next;
        while (tempPos < position) {
            start = start.next;
            tempPos++;
        }
        let next = start.next;
        let prev = start.prev;
        prev.next = next;
        next.prev = prev;
        start.prev = null;
        start.next = null;
        size--;
    }
    function deleteLinkedList() {
        header = null;
        trailer = null;
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
}
