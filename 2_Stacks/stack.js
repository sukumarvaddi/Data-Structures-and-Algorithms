function stack() {
    let elementContainer = [];
    return {
        size: function () {
            return elementContainer.length;
        },
        isEmpty() {
            return elementContainer.length === 0;
        },
        push(element) {
            elementContainer.push(element);
        },
        pop() {
            if (!this.isEmpty()) {
                return elementContainer.pop();
            }
            throw new Error('Stack Empty');
        },
        top() {
            if (!this.isEmpty()) {
                return elementContainer[elementContainer.length - 1];
            }
            throw new Error('Stack Empty');
        },
    };
}

exports.stack = stack;
