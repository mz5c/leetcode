### 解题思路
递归方法
```java
class Solution {
    public boolean isMatch(String s, String p) {
        if (p.isEmpty()) {//正则表达式为空时，判断匹配字符串是否为空
            return s.isEmpty();
        }
        //第一个字符串是否匹配
        boolean first_match = (!s.isEmpty() && (p.charAt(0) == s.charAt(0) || p.charAt(0) == '.'));
        if (p.length() >= 2 && p.charAt(1) == '*'){//存在通配符"*"的情况
            //通配符匹配中0次 或 1次的情况
            return (isMatch(s, p.substring(2)) || (first_match && isMatch(s.substring(1), p)));
        } else {
            //第一次字符匹配的情况下，继续比较下一次字符
            return first_match && isMatch(s.substring(1), p.substring(1));
        }
    }
}
```
[其他方法参考官网](https://leetcode.com/problems/regular-expression-matching/solution/)