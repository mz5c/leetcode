/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var res = [];
    for (var i = 0; i < nums1.length; i++) {
        var j = nums2.indexOf(nums1[i]);
        if (j !== -1) {
            res.push(nums1[i]);
            nums2.splice(j, 1);
        }
    }
    return res;
};