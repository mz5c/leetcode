/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let ret = parseInt(str, 10);
    if (isNaN(ret)) {
        return 0;
    }
    if (ret > 2147483647) {
        return 2147483647;
    } else if (ret < -2147483648) {
        return -2147483648;
    } else {
        return ret;
    }
};
