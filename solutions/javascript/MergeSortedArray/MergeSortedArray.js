/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var tmp = null, j = null;
    for (var i = 0; i < n; i++) {
        tmp = nums2[i];
        j = m + i - 1;
        while (j >= 0 && tmp < nums1[j]) {
            nums1[j + 1] = nums1[j];
            j--;
        }
        nums1[j + 1] = tmp;
    }
};
