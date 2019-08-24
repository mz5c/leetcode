### 解题思路
暴力求解，遍历数组
```java
class Solution {
    public boolean isOneBitCharacter(int[] bits) {
        for (int i = 0; i < bits.length; i++) {
            if (bits[i] == 1) {//为1时自动跳过2位
                i++;
            } else if (bits[i] == 0 && i == bits.length - 1) {//为0且为最后一位时返回true，否则继续下一位比较
                return true;
            }
        }
        return false;
    }
}
```