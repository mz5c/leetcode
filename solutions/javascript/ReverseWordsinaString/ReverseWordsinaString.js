/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var res = [], start = 0, end = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            if (i == 0 || str[i - 1] == ' ') {
                start = i;
                end = i + 1;
            } else {
                end = i + 1;
            }
        } else if (start < end) {
            res.push(str.substr(start, end - start));
            start = end;
        }
    }
    if (start < end) {
        res.push(str.substr(start, end - start));
    }
    return res.reverse().join(' ');
};