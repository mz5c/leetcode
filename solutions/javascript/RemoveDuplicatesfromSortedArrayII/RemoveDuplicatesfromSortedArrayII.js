/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 3) {
        return nums.length;
    }
    let m = new Map(), i = 0;
    while (true) {
        if (i > nums.length) {
            return nums.length;
        } else if (!m.has(nums[i])) {
            m.set(nums[i], 1);
            i++;
        } else if (m.get(nums[i]) === 1) {
            m.set(nums[i], 2);
            i++;
        } else {
            nums.splice(i, 1);
        }
    }
};
