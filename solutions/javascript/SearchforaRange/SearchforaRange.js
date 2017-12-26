/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var l = nums.indexOf(target);
    if (l == -1) {
        return [-1, -1];
    }
    var res = [l, l];
    for (var i = l + 1; i < nums.length; i++) {
        if (nums[i] == target) {
            res[1] = i;
        } else {
            break;
        }
    }
    return res;
};
