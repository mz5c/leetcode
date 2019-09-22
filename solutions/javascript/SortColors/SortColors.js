/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (var i = 1; i < nums.length; i++) {
        var x = nums[i];
        var j = i - 1;
        while (j >= 0 && x < nums[j]) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = x;
    }
};