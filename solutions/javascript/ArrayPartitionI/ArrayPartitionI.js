/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((x, y)=>x-y);
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            res += nums[i];
        }
    }
    return res;
};