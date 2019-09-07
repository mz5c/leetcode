### 解题思路
>我的思路是从数组首尾各遍历一次，具体需要看代码理解一下

其他人代码：
```java
class Solution {
    public int trap(int[] height) {
        int result = 0;
        int[] left = new int[height.length];
        int[] right = new int[height.length];
        int max = 0;
        for (int i = 0; i < height.length; ++i) {
            max = Math.max(max, height[i]);
            left[i] = max;
        }
        max = 0;
        for (int i = height.length - 1; i >= 0; --i) {
            max = Math.max(max, height[i]);
            right[i] = max;
        }
        for (int i = 0; i < height.length; ++i) {
            int level = Math.min(left[i], right[i]);
            result += (level - height[i]);
        }
        return result;
    }
}
```