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
                return;
            }
            let previous = HEAD;
            let current = HEAD.next;
            while (current) {
                if (current.value === value) {
                    previous.next = current.next;
                    current.next = null;
                    return;
                }
                previous = current;
                current = current.next;
            }
        }
    }
    function deleteNodeAtGivenPosition(position) {
        if (position > size && position < 0) {
            return;
        }
        if (position === 0) {
            let temp = HEAD;
            HEAD = HEAD.next;
            temp.next = null;
        }
        let start = HEAD;
        let previous = null;
        pos = 0;
        while (pos < position) {
            start = star.next;
            previous = start;
            post++;
        }
        previous.next = start.next;
        status.next = null;
    }
    function deleteLinkedList() {
        HEAD = null;
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
        console.log(data);
    }
    function getSize() {
        return size;
    }
}

module.exports = linkedListImpl;
