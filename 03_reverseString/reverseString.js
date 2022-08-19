const reverseString = function(str) {
    var str = ["hello", "there"];
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;


};

// Do not edit below this line
module.exports = reverseString;
