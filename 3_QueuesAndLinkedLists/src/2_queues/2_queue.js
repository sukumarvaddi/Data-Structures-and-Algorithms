function queue() {
    let storage = [];
    return {
        enqueue,
        dequeue,
        front,
        size,
        isEmpty,
    };

    function enqueue(el) {
        storage.push(el);
    }

    function dequeue() {
        if (storage.length === 0) {
            throw new Error('Queue empty');
        }
        return storage.shift();
    }

    function front() {
        if (storage.length === 0) {
            throw new Error('Queue empty');
        }
        return storage[0];
    }

    function size() {
        return storage.length;
    }

    function isEmpty() {
        return storage.length === 0;
    }
}
exports.queue = queue;
