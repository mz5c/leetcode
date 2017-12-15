/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s == '' || s.length == 1) {
        return s;
    }
    var min_start = 0;
    var max_len = 1;
    for (var i = 0; i < s.length;) {
        if (s.length - i <= max_len / 2) break;
            var j = i;
            var k = i;
            while (k < s.length - 1 && s[k + 1] == s[k]) ++k;
            i = k + 1;
            while (k < s.length - 1 && j > 0 && s[k + 1] == s[j - 1]) {++k; --j;}
            if (k - j + 1 > max_len) { min_start = j; max_len = k - j + 1}
    }
    return s.substr(min_start, max_len);
};
