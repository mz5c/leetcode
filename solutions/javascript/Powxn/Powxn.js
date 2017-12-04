/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var ret = 1;
    if(n < 0) {
        x = 1 / x;
        n = -n;
    }
    while(n) {
        if(n&1) {
            ret *= x;
        }
        x *= x;
        n = Math.floor(n/2);
    }
    return ret;
};
