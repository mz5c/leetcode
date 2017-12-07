/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let arr = [];
    for (let i = 0; i < 1 << n; i++) {
        arr.push(i ^ i >> 1);
    }
    return arr;
};
