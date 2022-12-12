const reverseString = function(stringToBeReversed)
{
    let fullyReversedString = "";
    for (let index = (stringToBeReversed.length - 1); index >= 0; --index)
    {
        fullyReversedString += stringToBeReversed[index];
    }
    return fullyReversedString;
};

// Do not edit below this line
module.exports = reverseString;
