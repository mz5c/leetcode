/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let m_arr = Array(m).fill(0), n_arr = Array(n).fill(0);
    let i = 0, j = 0;
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                m_arr[i] = 1
                n_arr[j] = 1;
            }
        }
    }
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (m_arr[i] === 1 || n_arr[j] === 1) {
                matrix[i][j] = 0;
            }
        }
    }
};
