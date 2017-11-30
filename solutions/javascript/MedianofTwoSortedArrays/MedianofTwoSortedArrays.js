/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var i = 0, j = 0, arr = [];
    while (i < nums1.length || j < nums2.length) {
        if (i == nums1.length) {
            arr.push(nums2[j++]);
        } else if (j == nums2.length) {
            arr.push(nums1[i++]);
        } else if (nums1[i] <= nums2[j]) {
            arr.push(nums1[i++]);
        } else {
            arr.push(nums2[j++]);
        }
    }
    return arr.length & 1 ? arr[(arr.length + 1) / 2 - 1] : (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
};
