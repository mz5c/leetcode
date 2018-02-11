/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2), arr = [];
    arr = str.split('').reverse();
    for (let i = 0; i < 32 - str.length; i++) {
        arr.push("0");
    }
    return parseInt(arr.join(''), 2);
};
