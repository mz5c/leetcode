### 解题思路
不使用循环或递归的解法
```java
public class Solution {
    public boolean isPowerOfTwo(int n) {
        return (Math.log10(n) / Math.log10(2)) % 1 == 0;
    }
}
```
使用循环求解
```java
class Solution {
    public boolean isPowerOfTwo(int n) {
        while (n > 0 && n % 2 == 0) {
            n /= 2;
        }
        return n == 1;
    }
}
```