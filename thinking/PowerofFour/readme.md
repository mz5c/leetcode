### 解题思路
使用循环求解
```java
class Solution {
    public boolean isPowerOfFour(int num) {
        while (num > 0 && num % 4 == 0) {
            num /= 4;
        }
        return num == 1;
    }
}
```
---------------------------

不使用循环或递归的解法
```java
class Solution {
    public boolean isPowerOfFour(int num) {
        if(num < 0) {
            return false;
        }
        int tmp = num-1;
        return (num & tmp) == 0 && tmp % 3 == 0;
    }
}
```
说明：4^n - 1 = (2^n + 1) * (2^n - 1)，n为大于0的整数，(4^n - 1) % 3 == 0