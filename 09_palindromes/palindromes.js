const palindromes = function (chars) {
    // Convert the input string to lowercase
    let word = chars.toLowerCase();
    
    // Create an array from the lowercase string
    let unfilteredArray = Array.from(word);
    
    // Filter out spaces and punctuation
    let filtered = unfilteredArray.filter((symbol) => {
        if (
            symbol === " " ||
            symbol === "" ||
            symbol === "," ||
            symbol === "!" ||
            symbol === "."
        ) {
            return false; // Exclude unwanted symbols
        } else {
            return true; // Include valid symbols
        }
    });

    // Initialize pointers for palindrome checking
    let pointA = 0;
    let pointB = filtered.length - 1;

    // Check if the filtered array is a palindrome
    while (pointA <= pointB) {
        if (filtered[pointA] !== filtered[pointB]) {
            return false; // Not a palindrome if characters don't match
        }
        pointA++; // Move the left pointer to the right
        pointB--; // Move the right pointer to the left
    }

    return true; // It's a palindrome if all characters matched
};

// Do not edit below this line
module.exports = palindromes;
