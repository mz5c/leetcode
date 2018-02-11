/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k % nums.length === 0) {
        return;
    }
    k %= nums.length;
    let arr = nums.slice();
    for (let i = 0; i < nums.length; i++) {
        nums[(i + k) % nums.length] = arr[i];
    }
};
