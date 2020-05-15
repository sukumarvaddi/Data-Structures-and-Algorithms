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
        return Boolean(~elementHolder.includes(element));
    };

    return this;
}

var ds = new DynamicSet();
ds.insert(5);
ds.insert(8);
ds.insert(-1);
ds.insert(0);
ds.insert(9);

console.log(ds.delete(8));
console.log(ds.delete(8));
