### 解题思路
>暴力破解，看代码理解
```java
class Solution {
    public String countAndSay(int n) {
        String a = "1";
        int i = 1;
        StringBuilder res;
        while (i < n) {
            res = new StringBuilder();
            for (int j = 0; j < a.length(); j++) {
                char x = a.charAt(j);
                int count = 1;
                while (j + count < a.length() && a.charAt(j + count) == a.charAt(j)) {
                    count++;
                }
                res.append(count).append(a.charAt(j));
                j += count - 1;
            }
            i++;
            a = res.toString();
        }
        res = new StringBuilder(a);
        return res.toString();
    }
}
```