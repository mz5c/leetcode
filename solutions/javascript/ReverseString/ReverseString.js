/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s ? s.split('').reverse().join('') : s;
};