const leapYears = function(year) {
    let year = '';
    let numYear = Number(year);
    if (numYear % 4 == 0 && numYear % 100 != 0 || numYear % 400 == 0) {
        return 'It is a leap year!'
    } else {
        return 'It is not a leap year!'
    }
};

// Do not edit below this line
module.exports = leapYears;
