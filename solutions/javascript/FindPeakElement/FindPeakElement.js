/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    nums.unshift(-Infinity);
    nums.push(-Infinity);
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i - 1;
        }
    }
    return -1;
};
