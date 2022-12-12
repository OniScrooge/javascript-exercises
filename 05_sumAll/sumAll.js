const sumAll = function(value1, value2)
{
    if (value1 < 0 || value2 < 0 || value1 / 1 !== value1 || value2 / 1 !== value2)
    {
        return "ERROR";
    }

    let sumOfAll = 0;
    if (value1 < value2)
    {
        for (let count = value1; count <= value2; ++count)
        {
            sumOfAll += count;
        }
    }
    else
    {
        for (let count = value2; count <= value1; ++count)
        {
            sumOfAll += count;
        }
    }

    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
