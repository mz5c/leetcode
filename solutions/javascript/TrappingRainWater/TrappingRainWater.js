/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length == 0) {
        return 0;
    }
    let before_units = height.reduce((x, y) => x + y);
    for (let i = 0; i < height.length;) {
        let j = i + 1;
        let tmp = height[i];
        while (j < height.length && height[j] < tmp) {
            j++;
        }
        if (j == height.length) {
            break;
        }
        i++;
        while (i < j) {
            height[i] = tmp;
            i++;
        }
    }
    for (let i = height.length - 1; i >= 0;) {
        let j = i - 1;
        let tmp = height[i];
        while (j >= 0 && height[j] < tmp) {
            j--;
        }
        if (j == -1) {
            break;
        }
        i--;
        while (i > j) {
            height[i] = tmp;
            i--;
        }
    }
    let after_units = height.reduce((x, y) => x + y);
    return after_units - before_units;
};
