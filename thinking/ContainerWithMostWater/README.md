### 解题思路
可以用暴力破解法，也可以用下面的方法
```java
class Solution {
    public int maxArea(int[] height) {
        int maxarea = 0, l = 0, r = height.length - 1;
        while (l < r) {
            maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
            if (height[l] < height[r]) {//这个判断也可以是小于等于，对结果来说没有区别
                l++;
            } else {
                r--;
            }
        }
        return maxarea;
    }
}
```