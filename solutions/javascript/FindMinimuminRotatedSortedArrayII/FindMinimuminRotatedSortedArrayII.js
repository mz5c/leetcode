/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var len = nums.length;
    if (len == 1 || nums[0] < nums[len - 1]) {
        return nums[0];
    } else {
        var i = 0, j = len - 1;
        while (i < j) {
            if (nums[i] > nums[i + 1]) {
                return nums[i + 1];
            }
            if (nums[j] < nums[j - 1]) {
                return nums[j];
            }
            i++;
            j--;
        }
        return nums[j];
    }
}