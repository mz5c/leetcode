/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let m = haystack.length, n = needle.length;
    if (n === 0) {
        return 0;
    } else if (m < n) {
        return -1;
    }
    for (let i = 0; i <= m - n; i++) {
        if (haystack.substr(i, n) === needle) {
            return i;
        }
    }
    return -1;
};
