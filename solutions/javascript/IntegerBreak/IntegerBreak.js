/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n <4) {
        return n - 1;
    } else if (n == 4) {
        return n;
    } else {
        var res = 1;
        while (true) {
            n -= 3;
            res *= 3;
            if (n <= 4) {
                res *= n;
                break;
            }
        }
        return res;
    }
};