/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var n = nums.length;
    if (n < 2) {
        return n ? nums[0] : 0;
    }
    return Math.max(robber(nums, 0, n - 2), robber(nums, 1, n - 1));
};
var robber = function(nums, l, r) {
    var pre = 0, cur = 0;
    for (var i = l; i <= r; i++) {
        var tmp = Math.max(pre + nums[i], cur);
        pre = cur;
        cur = tmp;
    }
    return cur;
};