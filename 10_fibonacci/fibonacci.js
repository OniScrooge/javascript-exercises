const fibonacci = function(value) {
    let checkedValue = Number(value);

    if (checkedValue < 0) return "OOPS";

    let fibonacciArray = [0, 1, 1];
    for (let index = 3; index <= checkedValue; ++index)
    {
        fibonacciArray.push(fibonacciArray[index - 1] + fibonacciArray[index - 2]);
    }
    return fibonacciArray[checkedValue];
};

// Do not edit below this line
module.exports = fibonacci;
