function getNode(value) {
    return {
        data: value,
        next: null,
    };
}

function linkedListImpl() {
    let HEAD = null;
    let size = 0;
    return {
        insertAtBeginning, //O(1)
        insertAfterGivenValue, // Traversing takes O(n) and insertion is O(1)
        insertAtEnd, //O(n)
        deleteNodeWithGivenValue /* Given a key, deletes the first occurrence of key in linked list */,
        deleteNodeAtGivenPosition, // Traversing takes O(n) and insertion is O(1)
        deleteLinkedList, //O(1) in javascript, java and C# (Garbage colellected languages)
        getSize,
        contains,
        isEmpty,
        print,
    };

    function insertAtBeginning(value) {
        let node = getNode(value);
        if (HEAD) {
            node.next = HEAD;
            HEAD = node;
        } else {
            HEAD = node;
        }
        size++;
    }

    function retrieveNode(value) {
        if (!HEAD) {
            return HEAD;
        }
        let start = HEAD;
        let done = false;
        while (start && !done) {
            if (start.data === value) {
                done = true;
            } else {
                start = start.next;
            }
        }
        return start;
    }

    function insertAfterGivenValue(value, valueTobeInserted) {
        let keyNode = retrieveNode(value);
        let nodeTobeInserted = getNode(valueTobeInserted);

        if (keyNode) {
            let leftOverNode = keyNode.next;
            keyNode.next = nodeTobeInserted;
            nodeTobeInserted.next = leftOverNode;
            size++;
        }
    }
    function insertAtEnd(value) {
        let node = getNode(value);

        if (!HEAD) {
            HEAD = node;
            size++;
            return;
        }
        let start = HEAD;
        while (start.next) {
            start = start.next;
        }
        start.next = node;
        size++;
    }
    function deleteNodeWithGivenValue(value) {
        if (HEAD) {
            if (HEAD.data === value) {
                HEAD = HEAD.next;
                size--;
                return;
            }
            let current = HEAD.next;
            let previous = HEAD;
            while (current && current.data !== value) {
                previous = current;
                current = current.next;
            }
            if (current && current.data === value) {
                previous.next = current.next;
                current.next = null;
                size--;
            }
        }
    }
    function deleteNodeAtGivenPosition(position) {
        if (position >= size || position < 0) {
            return;
        }
        if (position === 0) {
            let temp = HEAD;
            HEAD = HEAD.next;
            temp.next = null;
            size--;
            return;
        }
        let start = HEAD;
        let previous = null;
        let pos = 0;
        while (pos < position) {
            start = start.next;
            previous = start;
            pos++;
        }
        previous.next = start.next;
        status.next = null;
    }
    function deleteLinkedList() {
        HEAD = null;
        size = 0;
    }
    function contains(val) {
        let start = HEAD;
        while (start) {
            if (start.data === val) {
                return true;
            }
            start = start.next;
        }
        return false;
    }
    function isEmpty() {
        return getSize() === 0;
    }

    function print() {
        let start = HEAD;
        let data = '';
        while (start) {
            data = data.concat(' ', start.data);
            start = start.next;
        }
        return data.trim();
    }
    function getSize() {
        return size;
    }
}

const linkedList = linkedListImpl();

linkedList.insertAtEnd(5);
linkedList.insertAtEnd(6);
linkedList.deleteNodeWithGivenValue(6);
module.exports = linkedListImpl;
