/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    while (true) {
        if (i < nums.length) {
            if (nums[i] == val) {
                nums.splice(i, 1);
            } else {
                i++;
            }
        } else {
            break;
        }
    }
    return nums.length;
};
