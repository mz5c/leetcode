### 解题思路
简单暴力的解法
```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        for (int i = 0; i < ransomNote.length(); i++) {
            int j = magazine.indexOf(ransomNote.charAt(i));
            if (j == -1) {
                return false;
            }
            //从magazine中删除索引为j的字符
            magazine = magazine.substring(0, j) + magazine.substring(j + 1, magazine.length());
        }
        return true;
    }
}
```
更好的方法，需要理解Java字符串`indexOf(String str, int fromIndex)`的用法及代码中`c-'a'`的含义
```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        if (ransomNote.length() > magazine.length()) {
            return false;
        }
        int[] log = new int[26];
        for (char c: ransomNote.toCharArray()) {
            int x = magazine.indexOf(c, log[c-'a']);
            if(x == -1) {
                return false;
            } else {
                log[c-'a'] = x+1;
            }
        }
        return true;
    }
}
```