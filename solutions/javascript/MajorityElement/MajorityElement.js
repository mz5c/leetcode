/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mE = nums[0], count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            count++;
            mE = nums[i];
        } else if (mE === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return mE;
};
