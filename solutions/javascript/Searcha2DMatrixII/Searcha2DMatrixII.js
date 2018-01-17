/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) {
        return false;
    }
    let m = matrix.length, n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] > target) {
            break;
        }
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] > target) {
                break;
            } else if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};
