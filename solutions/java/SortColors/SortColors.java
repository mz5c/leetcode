class Solution {
    public void sortColors(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            int x = nums[i];
            int j = i - 1;
            while (j >= 0 && x < nums[j]) {
                nums[j + 1] = nums[j];
                j--;
            }
            nums[j + 1] = x;
        }
    }
}