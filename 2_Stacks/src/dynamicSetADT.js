function DynamicSet() {
    let elementHolder = [];

    this.insert = function (element) {
        elementHolder.push(element);
        return elementHolder;
    };
    this.delete = function (element) {
        if (this.isIn(element)) {
            let indexOfTheElement = elementHolder.findIndex((el) => el === element);
            elementHolder.splice(indexOfTheElement, 1);
        }
        return elementHolder;
    };
    this.isIn = function (element) {
        return elementHolder.includes(element);
    };

    return this;
}

exports.DynamicSet = DynamicSet;
