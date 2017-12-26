/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length <= 1) {
        return;
    }
    let i = nums.length - 1;
    for (;i >= 1; i--) {
        if (nums[i] > nums[i - 1]) {
            break;
        }
    }
    if (i != 0) {
        my_swap(nums, i - 1);
    }
    my_reverse(nums, i);
};
var my_swap = function(nums, i) {
    for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
            let t = nums[j];
            nums[j] = nums[i];
            nums[i] = t;
            break;
        }
    }
};
var my_reverse = function(nums, i) {
    let a = i, b = nums.length - 1;
    while (a < b) {
        let t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
        a++;
        b--;
    }
};
