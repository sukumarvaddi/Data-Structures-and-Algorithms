function insertionSort(listOfIntegers) {
    for (let i = 1; i < listOfIntegers.length; i++) {
        let k = i - 1;

        while (k >= 0) {
            if (listOfIntegers[k + 1] < listOfIntegers[k]) {
                let temp = listOfIntegers[k + 1];
                listOfIntegers[k + 1] = listOfIntegers[k];
                listOfIntegers[k] = temp;
            }
            k--;
        }
    }
    return listOfIntegers;
}

function insertionSortV2(list) {
    for (let i = 1; i < list.length; i++) {
        let k = i - 1;
        let key = list[i];
        while (k >= 0 && key < list[k]) {
            list[k + 1] = list[k];
            k--;
        }
        list[k + 1] = key;
    }

    return list;
}

exports.v2 = insertionSortV2;
exports.v1 = insertionSort;
