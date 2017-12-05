/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort(function(x,y){return x>y?1:-1});
    var res = [];
    for (var i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] != nums[i-1])) {
            var x = i + 1;
            var y = nums.length - 1;
            while (x < y) {
                if (nums[i] + nums[x] + nums[y] === 0) {
                    res.push([nums[i], nums[x], nums[y]]);
                    while (x < y && nums[x] == nums[x+1]) x++;
                    while (x < y && nums[y-1] == nums[y]) y--;
                    x++;
                    y--;
                } else if (nums[i] + nums[x] + nums[y] < 0) {
                    while (x < y && nums[x] == nums[x+1]) x++;
                    x++;
                } else {
                    while (x < y && nums[y-1] == nums[y]) y--;
                    y--;
                }
            }
        }
    }
    return res;
};
