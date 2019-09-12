/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var len = 1;
    var count = 9;
    var index = 1;
    while (n > len * count) {
        n -= len * count;
        len++;
        count *= 10;
        index *= 10;
    }
    index += parseInt((n - 1) / len);
    return parseInt((index + '')[(n - 1) % len]);
};