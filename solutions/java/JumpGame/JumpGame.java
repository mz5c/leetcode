class Solution {
    public boolean canJump(int[] nums) {
        int res = 0;//记录能够达到的最远index
        for (int i = 0; i < nums.length; i++) {
            if (i > res) {
                return false;
            }
            res = Math.max(res, i + nums[i]);
        }
        return true;
    }
}