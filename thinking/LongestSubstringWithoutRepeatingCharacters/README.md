### 解题思路
直接看代码
```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        //记录当前子串
        String curStr = "";
        int maxLen = 0;
        int lastPos = -1;
        for (int i = 0; i < s.length(); i++) {
            lastPos = curStr.indexOf(s.charAt(i));
            if (-1 == lastPos) {
                curStr += s.charAt(i);
                maxLen = curStr.length() > maxLen ? curStr.length() : maxLen;
            } else {
                //如果当前匹配字符已存在子串中则从重复字符后截取并拼接
                curStr = curStr.substring(lastPos + 1) + s.charAt(i);
            }
        }
        return maxLen;
    }
}
```