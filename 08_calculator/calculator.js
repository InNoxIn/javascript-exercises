const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0); // Start with 0 to correctly sum the array.
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1); // Start with 0 to correctly sum the array.
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
