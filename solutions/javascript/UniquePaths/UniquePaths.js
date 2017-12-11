/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var res = [];
    for (var i = 0; i < m; i++) {
        res[i] = [];
        for (var j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                res[i][j] = 1;
            } else {
                res [i][j] = res[i][j - 1] + res[i - 1][j];
            }
        }
    }
    return res[m - 1][n - 1];
};
