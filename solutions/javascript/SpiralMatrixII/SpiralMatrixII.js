/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n < 1) {
        return [];
    }
    let i = 0, j = 0, k = 1, res = [];
    let toward = 'right', arr = {'right':'down', 'down':'left', 'left':'up', 'up':'right'};
    for (let idx = 0; idx < n; idx++) {
        res[idx] = Array(n).fill(Infinity);
    }
    while (true) {
        res[i][j] = k;
        k++;
        if (toward == 'right') {
            if (j < n - 1 && res[i][j + 1] === Infinity) {
                j++;
            } else if (i < n - 1 && res[i + 1][j] === Infinity) {
                i++;
                toward = arr[toward];
            } else {
                break;
            }
        } else if (toward == 'down') {
            if (i < n - 1 && res[i + 1][j] === Infinity) {
                i++;
            } else if (j > 0 && res[i][j - 1] === Infinity) {
                j--;
                toward = arr[toward];
            } else {
                break;
            }
        } else if (toward == 'left') {
            if (j > 0 && res[i][j - 1] === Infinity) {
                j--;
            } else if (i > 0 && res[i - 1][j] === Infinity) {
                i--;
                toward = arr[toward];
            } else {
                break;
            }
        } else if (toward == 'up') {
            if (i > 0 && res[i - 1][j] === Infinity) {
                i--;
            } else if (j < n - 1 && res[i][j + 1] === Infinity) {
                j++;
                toward = arr[toward];
            } else {
                break;
            }
        }
    }
    return res;
};
