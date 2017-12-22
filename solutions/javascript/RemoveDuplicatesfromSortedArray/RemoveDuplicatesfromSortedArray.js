/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 1;
    while (true) {
        if (i < nums.length) {
            if (nums[i] != nums[i - 1]) {
                i++;
            } else {
                nums.splice(i, 1);
            }
        } else {
            break;
        }
    }
    return nums.length;
};
