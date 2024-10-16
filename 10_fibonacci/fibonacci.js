const fibonacci = function(num) {
    // Convert input to a number
    const parsedNum = Number(num);

    // Check if the parsed input is a valid number
    if (isNaN(parsedNum)) {
        throw new Error("Input must be a valid number or numeric string");
    }
    
    // Check for negative numbers
    if (parsedNum < 0) return "OOPS";

    // Handle base cases
    if (parsedNum === 0) return 0;
    if (parsedNum === 1) return 1;

    // Calculate Fibonacci for num > 1
    let a = 0; // F(0)
    let b = 1; // F(1)
    let result;

    for (let i = 2; i <= parsedNum; i++) {
        result = a + b; // F(n) = F(n-1) + F(n-2)
        a = b; // Move to next Fibonacci number
        b = result; // Update F(n) to F(n+1)
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
