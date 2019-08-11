class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int i = 0, j = 0;
        int m = nums1.length, n = nums2.length;
        int[] arr = new int[m + n];
        int k = 0;
        while (i < m || j < n) {
            if (i == m) {
                arr[k++] = nums2[j++];
            } else if (j == n) {
                arr[k++] = nums1[i++];
            } else if (nums1[i] <= nums2[j]) {
                arr[k++] = nums1[i++];
            } else {
                arr[k++] = nums2[j++];
            }
        }
        return ((m + n) & 1) == 1 ? arr[(m + n)/2] : (arr[(m + n)/2] + arr[(m + n)/2 - 1])/2.0;
    }
}