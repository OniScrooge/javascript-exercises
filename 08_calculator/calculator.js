const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(myArray) {
	if (!myArray) return myArray;

  let total = 0;
  for (let index = 0; index < myArray.length; ++index)
  {
    total += myArray[index];
  }
  return total;
};

const multiply = function(myArray) {
  let total = 1;
  myArray.forEach(element => {
    total *= element;
  });

  return total;
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(a) {
	if (a <= 1) return 1;

  let total = a;
  for (let index = (a - 1); index > 0; --index)
  {
    total *= index;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
