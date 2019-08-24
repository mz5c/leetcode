### 解法思路
暴力求解，需要理解Java`String.join(CharSequence delimiter, CharSequence... elements)`用法
```java
class Solution {
    public String replaceWords(List<String> dict, String sentence) {
        String[] strings = sentence.split(" ");
        for (int i = 0; i < strings.length; i++) {
            for (String s : dict) {
                if (strings[i].indexOf(s) == 0) {//替换单词
                    strings[i] = s;
                    break;
                }
            }
        }
        return String.join(" ", strings);
    }
}
```