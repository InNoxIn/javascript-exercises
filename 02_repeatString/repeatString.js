const repeatString = function(string, num) {
    let newString = '';
    if (num < 0) {
        return "ERROR";
    }
    for (let index = 0; index < num; index++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
