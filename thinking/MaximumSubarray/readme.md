### 解题思路
>循环遍历数组，用2个遍历记录当前最大子数组只和当前子数组只和  
>剩下的看代码理解

```java
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
```