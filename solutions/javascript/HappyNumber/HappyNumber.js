/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var tmp = 0;
    var sum = 0;
    if (n == 1 || n == 7) {
        return true;
    } else if (n < 10) {
        return false;
    } else {
        while (n != 0) {
            tmp = n % 10;
            sum += tmp * tmp;
            n = parseInt(n / 10);
        }
    }
    return isHappy(sum);
};
