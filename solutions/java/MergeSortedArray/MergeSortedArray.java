class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        for (int i = 0; i < n; i++) {
            int tmp = nums2[i];
            int j = m + i - 1;
            while (j >= 0 && tmp < nums1[j]) {
                nums1[j + 1] = nums1[j];
                j--;
            }
            nums1[j + 1] = tmp;
        }
    }
}