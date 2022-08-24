const leapYears = function(num) {
    let year = num;
    let numYear = Number(year);
    //console.log(numYear);
    if (numYear % 4 == 0 && numYear % 100 != 0 || numYear % 400 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
