/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0], imax = res, imin = res;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let tmp = imax;
            imax = imin;
            imin = tmp;
        }
        imax = Math.max(nums[i], imax * nums[i]);
        imin = Math.min(nums[i], imin * nums[i]);
        res = Math.max(res, imax);
    }
    return res;
};
