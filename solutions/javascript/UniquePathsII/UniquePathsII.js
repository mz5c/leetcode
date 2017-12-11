/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length, n = obstacleGrid[0].length;
    var res = [];
    for (var i = 0; i < m; i++) {
        res[i] = [];
        for (var j = 0; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                res[i][j] = 0;
            } else if (i == 0 || j == 0) {
                if (i == 0 && j == 0) {
                    res[i][j] = 1;
                } else if (i > 0) {
                    res[i][j] = res[i - 1][j];
                } else {
                    res[i][j] = res[i][j - 1];
                }
            } else {
                res[i][j] = res[i][j - 1] + res[i - 1][j];
            }
        }
    }
    return res[m - 1][n - 1];
};
