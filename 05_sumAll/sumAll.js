const sumAll = function(arr) {

    let fullArr = [1, 2, 3, 4];
    let sum = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;


    for (let i = arr[0]; i <= arr[1]; i++) {
        fullArr.push(i);
    }

    sum = fullArr.reduce(reducer);

    return sum;
}

/*const sumAll = function() {

};*/

// Do not edit below this line
module.exports = sumAll;
