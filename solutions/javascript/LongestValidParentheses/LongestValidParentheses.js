/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let arr = [-1], max = 0;
    for (let i = 0; i < s.length; i++) {
        let t = arr[arr.length - 1];
        if (t != -1 && s[i] == ')' && s[t] == '(') {
            arr.pop();
            max = Math.max(max, i - arr[arr.length - 1]);
        } else {
            arr.push(i);
        }
    }
    return max;
};
