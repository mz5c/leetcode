/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var res = [], m = grid.length, n = grid[0].length;
    for (var i = 0; i < m; i++) {
        res[i] = [];
        for (var j = 0; j < n; j++) {
            if (i == 0) {
                if (j == 0) {
                    res[i][j] = grid[i][j];
                } else {
                    res[i][j] = res[i][j - 1] + grid[i][j];
                }
            } else if (j == 0) {
                res[i][j] = res[i - 1][j] + grid[i][j];
            } else {
                res[i][j] = res[i - 1][j] < res[i][j - 1] ? res[i - 1][j] + grid[i][j] : res[i][j - 1] + grid[i][j];
            }
        }
    }
    return res[m - 1][n - 1];
};
