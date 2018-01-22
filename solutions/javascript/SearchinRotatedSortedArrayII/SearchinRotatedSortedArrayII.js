/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l = 0, h = nums.length - 1, m = 0;
    while (l < h) {
        m = Math.floor((l + h) / 2);
        if (nums[m] == target) return true;
            if (nums[m] > nums[h]) {
                if (nums[m] > target && nums[l] <= target) h = m;
                else l = m + 1;
            } else if (nums[m] < nums[h]) {
                if (nums[m] < target && nums[h] >= target) l = m + 1;
                else h = m;
            } else {
                h--;
            }
    }
    return nums[l] == target ? true : false;
};
