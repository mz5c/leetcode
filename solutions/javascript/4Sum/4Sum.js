/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort(function(x,y){return x>y?1:-1});
    var res = [];
    for (var i = 0; i < nums.length - 3; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i-1])) {
            for (var j = i + 1; j < nums.length - 2; j++) {
                if (j === i + 1 || (j > i + 1 && nums[j] !== nums[j-1])) {
                    var x = j + 1;
                    var y = nums.length - 1;
                    while (x < y) {
                        if (nums[i] + nums[j] + nums[x] + nums[y] === target) {
                            res.push([nums[i], nums[j], nums[x], nums[y]]);
                            while (x < y && nums[x] == nums[x + 1]) x++;
                            x++;
                            while (x < y && nums[y - 1] == nums[y]) y--;
                            y--;
                        } else if (nums[i] + nums[j] + nums[x] + nums[y] < target) {
                            while (x < y && nums[x] == nums[x + 1]) x++;
                            x++;
                        } else {
                            while (x < y && nums[y - 1] == nums[y]) y--;
                            y--;
                        }
                    }
                }
            }
        }
    }
    return res;
};
