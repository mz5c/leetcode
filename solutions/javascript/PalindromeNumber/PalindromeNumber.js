/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    } else if (x < 10) {
        return true;
    } else if (x % 10 === 0) {
        return false;
    }
    let _x = x, num = 0;
    while (num < x) {
        num = num * 10 + _x % 10;
        _x = Math.floor(_x / 10);
    }
    return num === x;
};
