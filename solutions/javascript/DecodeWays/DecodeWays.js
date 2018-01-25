/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.indexOf(0) === 0 || s.length === 0) {
        return 0;
    }
    let a1 = [1], a2 = [0];
    for (let i = 1; i < s.length; i++) {
        if (s[i] == 0) {
            if (s[i - 1] != 1 && s[i - 1] != 2) {
                return 0;
            }
            a1[i] = 0;
            a2[i] = a1[i - 1];
        } else if (s[i - 1] < 2 || (s[i - 1] == 2 && s[i] <= 6)) {
            a1[i] = a1[i - 1] + a2[i - 1];
            a2[i] = a1[i - 1];
        } else {
            a1[i] = a1[i - 1] + a2[i - 1];
            a2[i] = 0;
        }
    }
    return a1.pop() + a2.pop();
};
