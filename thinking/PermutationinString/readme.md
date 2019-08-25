### 解题思路
>判断s2包不包含s1的全排列，就要看s1中的字符是不是在s2中全有，并且位置是连续的

暴力求解，利用Java中已有的函数方法求解，遍历字符串，看代码理解吧
```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) {
            return false;
        }
        s1 = sort(s1);
        for (int i = 0; i <= s2.length() - s1.length(); i++) {
            String tmp = sort(s2.substring(i, i + s1.length()));
            if (tmp.equals(s1)) {
                return true;
            }
        }
        return false;
    }

    private String sort(String s) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        return String.valueOf(chars);
    }
}
```
看了一下其他人的解法，发现下面这种解法更好更快，看一遍就能理解
```java
class Solution {
    public static boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) {
            return false;
        }
        //统计s1中每个字符出现的次数，s2中每个窗口长度为s1.length的窗口中字符出现的次数
        int[] hash1 = new int[26];
        int[] hash2 = new int[26];
        for (int i=0;i<s1.length();i++) {
            hash1[s1.charAt(i)-'a'] ++;
            hash2[s2.charAt(i)-'a'] ++;
        }
        if (Arrays.equals(hash1, hash2)) {
            return true;
        }
        for(int i=s1.length();i<s2.length();i++) {
            hash2[s2.charAt(i)-'a'] ++;
            hash2[s2.charAt(i-s1.length())-'a'] --;
            if(Arrays.equals(hash1, hash2)) {
                return true;
            }
        }
        return false;
    }
}
```