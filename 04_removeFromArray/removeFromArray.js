const removeFromArray = function(editedArray, arg1, arg2, arg3, arg4)
{
    let foundIndex;
    for(let index = 1; index < 5; ++index)
    {
        foundIndex = editedArray.indexOf(arguments[index]);
        if (foundIndex > -1)
        {
            editedArray.splice(foundIndex, 1);
        }
    }

    return editedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
