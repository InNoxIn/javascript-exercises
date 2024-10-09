const sumAll = function(x, y) {
    // Check if both x and y are numbers
    if (typeof x !== 'number' || typeof y !== 'number') {
        return "ERROR";
    }

    // Function to check if a value is an integer
    const isInteger = function(value) {
        return typeof value === 'number' && Number.isInteger(value);
    };

    // Check if both x and y are integers
    if (!isInteger(x) || !isInteger(y)) {
        return "ERROR";
    }

    // Ensure x is less than y; if not, swap them
    if (x > y) {
        [x, y] = [y, x];  // Destructuring assignment to swap values
    }

    if (x < 0 || y < 0) {
        return "ERROR";
    }

    // Create an array of values from x to y
    let values = [];
    for (let index = x; index <= y; index++) {
        values.push(index);
    }

    // Calculate the sum of the values in the array
    const result = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return result;  // Return the sum
};

// Do not edit below this line
module.exports = sumAll;
