/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arr = Array(26).fill(0);
    if (s.length === t.length) {
        for (let i = 0; i < s.length; i++) {
            arr[s.charCodeAt(i) - 97]++;
            arr[t.charCodeAt(i) - 97]--;
        }
        for (let j = 0; j < 26; j++) {
            if (arr[j] !== 0) {
                return false;
            }
        }
        return true;
    }
    return false;
};
