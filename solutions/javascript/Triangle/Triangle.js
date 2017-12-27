/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length, arr = triangle[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            arr[j] = Math.min(arr[j], arr[j + 1]) + triangle[i][j];
        }
    }
    return arr[0];
};
