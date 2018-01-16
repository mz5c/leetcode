/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            if ((i < nums.length - 1 && nums[i] != nums[i + 1]) || i === nums.length - 1) {
                return nums[i];
            }
        }
    }
};
