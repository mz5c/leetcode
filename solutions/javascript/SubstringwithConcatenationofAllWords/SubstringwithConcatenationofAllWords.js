/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var res = [];
    if (s == '' || words.length == 0) {
        return res;
    }
    var len = words[0].length;
    var map = new Map();
    for (var i = 0; i < words.length; i++) {
        map.set(words[i], map.has(words[i]) ? map.get(words[i]) + 1 : 1);
    }
    for (var i = 0; i <= s.length - len * words.length; i++) {
        var copy = new Map(map);
        for (var j = 0; j < words.length; j++) {
            var str = s.substr(i + j * len, len);
            if (copy.has(str)) {
                var count = copy.get(str);
                if (count == 1) {
                    copy.delete(str);
                } else {
                    copy.set(str, count - 1);
                }
                if (copy.size == 0) {
                    res.push(i);
                    break;
                }
            } else {
                break;
            }
        }
    }
    return res;
};
