/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var min = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
};