/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 4) {
        return n;
    }
    var res = [0, 1, 2, 3];
    for (var i = 4; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n];
};