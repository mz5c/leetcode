/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > res) return false;
        res = Math.max(res, i + nums[i]);
    }
    return true;
};
