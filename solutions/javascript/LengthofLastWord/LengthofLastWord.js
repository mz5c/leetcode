/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var res = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if ((i == s.length - 1 && s[i] == ' ') || (s[i] == ' ' && s[i + 1] == ' ')) {
            continue;
        }
        if (s[i] == ' ') {
            return res;
        } else {
            res++;
        }
    }
    return res;
};