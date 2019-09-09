class Solution {
    public int jump(int[] nums) {
        //BFS
        if (nums.length < 2) {
            return 0;
        }
        int level = 0, curFarthest = 0, curEnd = 0;
        for(int i = 0; i < nums.length; i++) {
            curFarthest = Math.max(curFarthest, nums[i] + i);
            if(i == curEnd) {
                curEnd = curFarthest;
                level++;
            }
            if(curEnd >= nums.length - 1) {
                return level;
            }
        }
        return -1;
    }
}