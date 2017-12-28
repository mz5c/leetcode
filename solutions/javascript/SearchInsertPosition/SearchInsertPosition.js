/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        if (target <= nums[l]) {
            return l;
        } else if (target > nums[r]) {
            return r + 1;
        } else if (target == nums[r]) {
            return r;
        } else {
            l++;
            r++;
        }
    }
    return l;
};
