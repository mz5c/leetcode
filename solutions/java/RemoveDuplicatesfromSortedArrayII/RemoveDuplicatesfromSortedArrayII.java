class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length < 3) {
            return nums.length;
        }
        int n = 0;
        for (int i = 2; i < nums.length; i++) {
            if (nums[i] != nums[n]) {
                n++;
                nums[n+1] = nums[i];
            }
        }
        return n + 2;
    }
}