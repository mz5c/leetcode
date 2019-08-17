/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 3) {
        return nums.length;
    }
    var n = 0;
    for (var i = 2; i < nums.length; i++) {
        if (nums[i] > nums[n]) {
            nums[n+2] = nums[i];
            n++;
        }
    }
    return n+2;
};