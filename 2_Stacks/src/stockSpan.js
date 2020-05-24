const { stack } = require('./stack');

function findStockSpanEfficient(stocks) {
    const stackObj = stack();
    let stockSpan = [];

    for (let i = 0; i < stocks.length; i++) {
        let done = false;
        let h = 0;
        while (!stackObj.isEmpty() && !done) {
            if (stocks[stackObj.top()] <= stocks[i]) {
                stackObj.pop();
            } else {
                done = true;
            }
        }
        if (stackObj.isEmpty()) {
            h = -1;
        } else {
            h = stackObj.top();
        }
        stockSpan[i] = i - h;
        stackObj.push(i);
    }
    return stockSpan;
}

module.exports = findStockSpanEfficient;

// console.log(findStockSpanEfficient([8, 6, 2, 3, 3, 4, 7]));

function findStockSpanBruteForce(stocks) {
    let span = [];
    stocks.forEach((stockValue, i) => {
        let k = i - 1;
        let done = false;
        while (k >= 0 && !done) {
            if (stockValue >= stocks[k]) {
                k--;
            } else {
                done = true;
            }
        }
        if (k < 0) {
            span[i] = i - 0 + 1;
        } else {
            span[i] = i - k;
        }
    });
    return span;
}

// console.log(findStockSpanBruteForce([8, 6, 2, 3, 3, 4, 7]));
