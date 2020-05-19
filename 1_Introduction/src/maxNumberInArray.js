// Precondition: Only list of integers  to be sent or empty list

function findMax(listOfNumbers) {
    if (!listOfNumbers.length) {
        throw new Error('Either not a list or List has no numbers');
    }
    let maximumNo = listOfNumbers[0];
    for (let no of listOfNumbers) {
        if (no > maximumNo) {
            maximumNo = no;
        }
    }
    return maximumNo;
}

exports.findMax = findMax;
