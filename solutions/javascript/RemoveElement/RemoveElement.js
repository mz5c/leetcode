/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var n = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[n++] = nums[i];
        }
    }
    return n;
};