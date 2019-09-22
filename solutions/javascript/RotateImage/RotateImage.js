/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
    if (n > 1) {
        if (n % 2) {//odd
            for (var i = 0; i < (n - 1) / 2; i++) {
                for (var j = 0; j <= (n - 1) / 2; j++) {
                    var tmp = matrix[i][j];
                    matrix[i][j] = matrix[n - j - 1][i];
                    matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
                    matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
                    matrix[j][n - i - 1] = tmp;
                }
            }
        } else {//even
            for (var i = 0; i < n / 2; i++) {
                for (var j = 0; j < n / 2; j++) {
                    var tmp = matrix[i][j];
                    matrix[i][j] = matrix[n - j - 1][i];
                    matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
                    matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
                    matrix[j][n - i - 1] = tmp;
                }
            }
        }
    }
};