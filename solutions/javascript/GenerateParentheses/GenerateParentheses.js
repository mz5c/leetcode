var res_arr = [];
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    res_arr = [];
    gars(n, n, '');
    return res_arr;
};
//get all result string
var gars = function(ln, rn, res) {
    if (ln == 0 && rn == 0) {
        res_arr.push(res);
    } else {
        if (ln > 0) {
            gars(ln - 1, rn, res + '(');
        }
        if (rn > 0 && rn > ln) {
            gars(ln, rn - 1, res + ')');
        }
    }
};
