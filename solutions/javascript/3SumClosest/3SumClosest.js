/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((x, y) => x - y);
    var csum = nums[0] + nums[1] + nums[2];
    for (var i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] != nums[i - 1]) {
            var x = i + 1;
            var y = nums.length - 1;
            while (x < y) {
                var sum = nums[i] + nums[x] + nums[y];
                if (sum == target) {
                    return target;
                } else if (sum < target) {
                    while (x < y && nums[x] == nums[x + 1]) x++;
                    x++;
                } else {
                    while (x < y && nums[y - 1] == nums[y]) y--;
                    y--;
                }
                csum = Math.abs(sum - target) < Math.abs(csum - target) ? sum : csum;
                sum = nums[i] + nums[x] + nums[y];
            }
        }
    }
    return csum;
};
