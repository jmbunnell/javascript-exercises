

const removeFromArray = function() {
    let numbers = [1,2,3,4];
    let array = numbers.filter((n) => {return n != 3});
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
