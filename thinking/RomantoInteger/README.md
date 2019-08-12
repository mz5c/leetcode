### 解题思路
比较简单，看代码即可理解  
从字符串第一位开始判断，如果有后一位的话，判断前一位表示的数是不是大于后一位的，如果是就累加，否则累减
```java
class Solution {
    public int romanToInt(String s) {
        Map<String, Integer> map = new HashMap<>();
        map.put("I", 1);
        map.put("V", 5);
        map.put("X", 10);
        map.put("L", 50);
        map.put("C", 100);
        map.put("D", 500);
        map.put("M", 1000);
        String[] arr = s.split("");
        int res = 0;
        for (int i = 0; i < arr.length; i++) {
            if (i < arr.length - 1 && map.get(arr[i]) < map.get(arr[i+1])) {
                res -= map.get(arr[i]);
            } else {
                res += map.get(arr[i]);
            }
        }
        return res;
    }
}
```