/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(function(x, y) {
        return parseInt(y + '' + x) - parseInt(x + '' + y);
    });
    var res = nums.join('');
    return parseInt(res) == 0 ? '0' : res;
};