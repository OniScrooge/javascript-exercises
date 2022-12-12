const repeatString = function(repeatedString, amountOfRepeats)
{
    if (amountOfRepeats < 0)
    {
        return "ERROR";
    }

    let fullyRepeatedString = "";
    for (let count = 0; count < amountOfRepeats; count++)
    {
        fullyRepeatedString += repeatedString;
    }
    return fullyRepeatedString;
};

// Do not edit below this line
module.exports = repeatString;
