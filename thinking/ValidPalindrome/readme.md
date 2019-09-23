### 解题思路
>先将字符串全转小写，将非小写字符及数字的字符用正则匹配替换为空  
>头尾同时遍历比较

```java
class Solution {
    public boolean isPalindrome(String s) {
        s = s.toLowerCase().replaceAll("[^a-z0-9]", "");
        if (s.length() == 0) {
            return true;
        }
        int i = 0, j = s.length() - 1;
        while (i <= j) {
            if (s.charAt(i) != s.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
```