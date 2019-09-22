class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = 0, curSum = 0;
        for (int i = 0; i < nums.length; i++) {
            curSum += nums[i];
            if (i == 0) {
                maxSum = nums[0];
            }
            if (curSum > maxSum) {
                maxSum = curSum;
            }
            if (curSum < 0) {
                curSum = 0;
            }
        }
        return maxSum;
    }
}