/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs == false) {
        return "";
    }
    var i = 1;
    var res = strs[0];
    while (i < strs.length) {
        while (strs[i].indexOf(res) != 0) {
            res = res.substr(0, res.length - 1);
        }
        i++;
    }
    return res;
};
