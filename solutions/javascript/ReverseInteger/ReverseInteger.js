/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var max_int = 2147483647, min_int = -2147483648;
    var sign = x >= 0 ? true : false;
    x = parseFloat(Math.abs(x).toString().split('').reverse().join(''));
    x = sign ? x : -x;
    if (x > max_int || x < min_int) {
        return 0;
    }
    return x;
};
