### 解题思路
不使用循环或递归的解法
```java
public class Solution {
    public boolean isPowerOfThree(int n) {
        return (Math.log10(n) / Math.log10(3)) % 1 == 0;
    }
}
```
使用循环求解
```java
class Solution {
    public boolean isPowerOfThree(int n) {
        while (n > 0 && n % 3 == 0) {
            n /= 3;
        }
        return n == 1;
    }
}
```
>参考https://leetcode.com/problems/power-of-three/solution/