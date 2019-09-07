### 解题思路
>题意是要求求解无序数组中最小的没有出现的正整数  
>思路是：
>1. 第一次遍历数组，尽量让数组下标为`i`的元素值为`i + 1`
>2. 第二次遍历数组，如果`nums[i] != i + 1`说明此数组中最小没出现的正整数为`i + 1`，返回`i + 1`即可  
>
>其他看代码理解
```java
class Solution {
    public int firstMissingPositive(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[nums[i] - 1]) {
                int tmp = nums[i];
                nums[i] = nums[tmp - 1];
                nums[tmp - 1] = tmp;
                i--;
            }
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != i+1) {
                return i + 1;
            }
        }
        return nums.length + 1;
    }
}
```