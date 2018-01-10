/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (i != j) {
                if (s[i] == s[j]) {
                    break;
                } else if (j == s.length - 1) {
                    return i;
                }
            } else if (j == s.length - 1) {
                return i;
            }
        }
    }
    return -1;
};
