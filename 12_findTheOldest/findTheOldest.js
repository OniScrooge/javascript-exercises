const findTheOldest = function(people) {
    let years = [];
    let currentDate = new Date();
    for (let index = 0; index < people.length; ++index)
    {
        if (!people[index].yearOfDeath)
        {
            years.push(currentDate.getFullYear() - people[index].yearOfBirth);
        }
        else
        {
            years.push(people[index].yearOfDeath - people[index].yearOfBirth);
        }
    }

    return people[years.indexOf(Math.max(...years))];
};

// Do not edit below this line
module.exports = findTheOldest;
