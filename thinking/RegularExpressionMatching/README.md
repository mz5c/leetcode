### 解题思路
#### 递归方法
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
#### 动态规划
下面代码需要理解的是二位数组dp的含义，举个例子来说：  
d[1][1]表示字符串s从下标0开始长度为1的子串与字符串p从下标0开始长度为1的子串是否是匹配的
那么dp[s.length][p.length]表示的就是字符串s和p是否匹配
```java
class Solution {
    public boolean isMatch2(String s, String p) {
            char[] ss = s.toCharArray();
            char[] pp = p.toCharArray();
            boolean[][] dp = new boolean[ss.length + 1][pp.length + 1];
            for (int i = 0; i < dp.length; i++) {
                for (int j = 0; j < dp[0].length; j++) {
                    // "" matches "", so it is true;
                    if (i == 0 && j == 0) {
                        dp[i][j] = true;
                        continue;
                    }
                    // "" pattern cannot match any s.
                    if (j == 0) {
                        dp[i][j] = false;
                        continue;
                    }
                    //set the value to false by default
                    dp[i][j] = false;
                    //if pattern is not a star, and it is '.' or s and p have the same char,
                    //then it is a match.
                    if (pp[j - 1] != '*') {
                        if (i > 0 && (pp[j - 1] == '.' || pp[j - 1] == ss[i - 1])) {
                            dp[i][j] = dp[i - 1][j - 1];
                        }
                    } else {
                        // 0 matches, i.e. b = ba*
                        if (j > 1) {
                            dp[i][j] = dp[i][j - 2];
                        }
                        //1 or more matches
                        if (i > 0 && j > 1 && (pp[j - 2] == '.' || pp[j - 2] == ss[i - 1])) {
                            dp[i][j] = (dp[i][j - 2] || dp[i - 1][j]);
                        }
                    }
    
                }
            }
            return dp[dp.length - 1][dp[0].length - 1];
        }
}
```
[其他方法参考官网](https://leetcode.com/problems/regular-expression-matching/solution/)