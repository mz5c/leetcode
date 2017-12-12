/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let match = {')':'(', ']':'[', '}':'{'};
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            arr.push(s[i]);
        } else if (arr.length === 0 || arr.pop() !== match[s[i]]) {
            return false;
        }
    }
    return arr.length === 0;
};
