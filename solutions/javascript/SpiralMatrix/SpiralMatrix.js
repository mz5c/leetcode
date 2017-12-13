/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) {
        return [];
    }
    let m = matrix.length, n = matrix[0].length, res = [];
    let i = 0, j = 0;
    let toward = 'right', arr = {'right':'down', 'down':'left', 'left':'up', 'up':'right'};
    while (true) {
        res.push(matrix[i][j]);
        matrix[i][j] = Infinity;
        if (toward == 'right') {
            if (j < n - 1 && matrix[i][j + 1] != Infinity) {
                j++;
            } else if (i < m - 1 && matrix[i + 1][j] != Infinity) {
                i++;
                toward = arr[toward];
            } else {
                break;
            }
        } else if (toward == 'down') {
            if (i < m - 1 && matrix[i + 1][j] != Infinity) {
                i++;
            } else if (j > 0 && matrix[i][j - 1] != Infinity) {
                j--;
                toward = arr[toward];
            } else {
                break;
            }
        } else if (toward == 'left') {
            if (j > 0 && matrix[i][j - 1] != Infinity) {
                j--;
            } else if (i > 0 && matrix[i - 1][j] != Infinity) {
                i--;
                toward = arr[toward];
            } else {
                break;
            }
        } else if (toward == 'up') {
            if (i > 0 && matrix[i - 1][j] != Infinity) {
                i--;
            } else if (j < n - 1 && matrix[i][j + 1] != Infinity) {
                j++;
                toward = arr[toward];
            } else {
                break;
            }
        }
    }
    return res;
};
