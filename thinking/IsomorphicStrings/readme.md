### 解题思路
>题目比较简单，可以使用map，set或者单纯用数组处理也是可以的  
>剩下的看代码理解

```java
class Solution {
    public boolean isIsomorphic(String s, String t) {
        Map<Character, Character> map = new HashMap<>();
        Set<Character> set = new HashSet<>();
        for (int i = 0; i < s.length(); i++) {
            if (map.containsKey(s.charAt(i))) {
                if (t.charAt(i) != map.get(s.charAt(i))) {
                    return false;
                }
            } else {
                map.put(s.charAt(i), t.charAt(i));
            }
            set.add(t.charAt(i));
        }
        return map.size() == set.size();
    }
}
```