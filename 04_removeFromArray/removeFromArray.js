const removeFromArray = function(arr, ...otherArgs) {

    let firstArr = arr;
    otherArgs.forEach(arg => {
        let index = firstArr.indexOf(arg);
        while (index !== -1) {
            firstArr.splice(index, 1);
            index = firstArr.indexOf(arg)
        }
    });
    return firstArr;
};


// Do not edit below this line
module.exports = removeFromArray;
