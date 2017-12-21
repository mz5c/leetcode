var res = null;
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    res = [];
    xxx(nums, []);
    return res;
};
var xxx = function(nums, arr) {
    if (nums.length === 0) {
        res.push(arr);
    } else {
        for (let i = 0; i < nums.length; i++) {
            let tmp = nums.slice();
            tmp.splice(i, 1);
            let tmp2 = arr.slice();
            tmp2.push(nums[i]);
            xxx(tmp, tmp2);
        }
    }
};
