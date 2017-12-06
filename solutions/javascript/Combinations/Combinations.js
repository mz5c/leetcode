var res = null;
var tmp = null;
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    res = [];
    xxx(n, k, 1, 1, []);
    return res;
};
var xxx = function(n, k, start, kth, arr) {
    for (var i = start; i <= n; i++) {
        tmp = arr.slice();
        tmp.push(i);
        if (kth == k) {
            res.push(tmp);
        } else {
            xxx(n, k, i + 1, kth + 1, tmp);
        }
    }
}
