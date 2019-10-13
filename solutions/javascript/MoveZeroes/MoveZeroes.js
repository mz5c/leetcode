/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i = nums.indexOf(0);
    var a = [];
    while (true) {
        if (i === -1) {
            break;
        }
        nums.splice(i, 1);
        a.push(0);
        i = nums.indexOf(0);
    }
    var n = a.length;
    while (n > 0) {
        nums.push(0);
        n--;
    }
};