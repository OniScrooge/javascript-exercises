const palindromes = function (myString) {
    myString = myString.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toUpperCase();

    let testString = '';
    for (let index = (myString.length - 1); index >= 0; --index)
    {
        testString += myString[index];
    }

    if (testString == myString)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
