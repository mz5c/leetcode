/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max_sum = 0, cur_sum = 0;
    for (var i = 0; i < nums.length; i++) {
        cur_sum += nums[i];
        if (i == 0) {
            max_sum = nums[0];
        }
        if (cur_sum > max_sum) {
            max_sum = cur_sum;
        }
        if (cur_sum < 0) {
            cur_sum = 0;
        }
    }
    return max_sum;
};