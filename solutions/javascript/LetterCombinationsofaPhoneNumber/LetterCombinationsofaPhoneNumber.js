var res_arr = [];
var arr = {'2':'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits == '') {
        return [];
    }
    res_arr = [];
    gars(digits, 0, digits.length, '');
    return res_arr;
};
//get all result string
var gars = function(digits, idx, n, res) {
    if (idx < n) {
        var s = arr[digits[idx]];
        for (var i = 0; i < s.length; i++) {
            gars(digits, idx + 1, n, res + s[i]);
        }
    } else {
        res_arr.push(res);
    }
};
