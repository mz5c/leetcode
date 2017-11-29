/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max_len = s.length == 1 ? 1 : 0;
    var set = new Set();
    for (var i = 0; i < s.length - 1; i++) {
        if (max_len >= s.length - i) {
            return max_len;
        }
        set.add(s[i]);
        for (var j = i + 1; j < s.length; j++) {
            if (set.has(s[j])) {
                break;
            } else {
                set.add(s[j]);
            }
        }
        max_len = max_len < set.size ? set.size : max_len;
        set.clear();
    }
    return max_len;
};
