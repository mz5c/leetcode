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
//solution 2
var lengthOfLongestSubstring_2 = function(s) {
    var cur_str = '', max_len = 0;
    for (let i = 0; i < s.length; i++) {
        let last_pos = cur_str.indexOf(s[i]);
        if (last_pos === -1) {
            cur_str += s[i];
        } else {
            max_len = cur_str.length > max_len ? cur_str.length : max_len;
            cur_str = cur_str.substr(last_pos + 1) + s[i];
        }
    }
    return cur_str.length > max_len ? cur_str.length : max_len;
};
