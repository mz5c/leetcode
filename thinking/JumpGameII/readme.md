### 解题思路
>看代码注释
```java
class Solution {
    public int jump(int[] nums) {
        //BFS
        if (nums.length < 2) {
            return 0;
        }
        //level记录jump次数，curFarthest记录当前能够jump到的最远index，curEnd记录每次jump后的index
        int level = 0, curFarthest = 0, curEnd = 0;
        for(int i = 0; i < nums.length; i++) {
            curFarthest = Math.max(curFarthest, nums[i] + i);
            if(i == curEnd) {//记录下一次jump到的index
                curEnd = curFarthest;
                level++;
            }
            if(curEnd >= nums.length - 1) {//到达末尾
                return level;
            }
        }
        return -1;
    }
}
```