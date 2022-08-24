const leapYears = function() {
    let year = '';
    let numYear = Number(year);
    if (numYear % 4 == 0 && numYear % 100 != 0 || numYear % 400 == 0) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
