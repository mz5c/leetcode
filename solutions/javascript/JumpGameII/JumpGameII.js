/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res = 0, max = 0, cur_p = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);
        if (i === cur_p) {
            res++;
            cur_p = max;
        }
    }
    return res;
};
