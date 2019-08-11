### 解题思路

举个例子讲

字符串：a b c d c b a  
下标：  0 1 2 3 4 5 6

i为当前匹配进度，j为子字符串左下标，k为右下标  
初始时 i=j=k=0  
第一次最外层while结束时，i=1,j=0,k=0,minStart=0,maxLen=1,子字符串为"a"  
第四次最外层while开始时，i=3,j=3,k=3,minStart=0,maxLen=1,子字符串为"a"，之后k++,j--左右开始匹配直到最后
得到最长子字符串"abcdcba"



```java
class Solution {
    public String longestPalindrome(String s) {
        //字符串为空或长度为1时，直接返回
        if ("".equals(s) || s.length() == 1) {
            return s;
        }
        int minStart = 0;//记录已匹配子字符串在原字符串中的最小下标位置
        int maxLen = 0;//记录已匹配子字符串最大长度
        int i,j,k;//i为当前匹配进度，j为子字符串左下标，k为右下标
        i = 0;
        while (i < s.length()) {
            if (s.length() - i <= maxLen/2) {//当前剩余最大子字符串长度小于等于已匹配子字符串长度时退出匹配循环
                break;
            }
            j = i;
            k = i;
            while (k < s.length() - 1 && s.charAt(k + 1) == s.charAt(k)) {//使初始匹配字符串达到最长
                k++;
            }
            i = k + 1;//更新下一次匹配的初始位置
            while (k < s.length() - 1 && j > 0 && s.charAt(k + 1) == s.charAt(j - 1)) {//子字符串同时向左右扩展匹配，使长度达到最长
                k++;
                j--;
            }
            if (k - j + 1 > maxLen) {//比较当前最长子字符串并更新结果
                minStart = j;
                maxLen = k - j + 1;
            }
        }
        return s.substring(minStart, minStart + maxLen);
    }
}
```