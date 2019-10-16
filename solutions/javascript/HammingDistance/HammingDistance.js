/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var s = (x ^ y).toString(2);
    var n = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            n++;
        }
    }
    return n;
};