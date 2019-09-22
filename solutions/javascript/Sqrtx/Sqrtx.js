/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l = 0, r = Math.floor(x / 2) + 1;
    while (l <= r) {
        var m = Math.floor((l + r) / 2);
        var sq = m * m;
        if (sq == x) {
            return m;
        } else if (sq < x) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return r;
};