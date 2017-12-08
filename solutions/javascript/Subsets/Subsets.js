var res = null;
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    res = [[]];
    for (let i = 1; i <= nums.length; i++) {
        xxx(nums, 0, i, []);
    }
    return res;
};
var xxx = function(nums, idx, n, arr) {
    for (let i = idx; i < nums.length + 1 - n; i++) {
        let tmp = arr.slice();
        tmp.push(nums[i]);
        if (n == 1) {
            res.push(tmp);
        } else {
            xxx(nums, i + 1, n - 1, tmp);
        }
    }
};
