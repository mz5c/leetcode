### 解题思路
位运算，右移`>>`的优先级高于异或`^`
解法一
```java
class Solution {
    public List<Integer> grayCode(int n) {
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < 1 << n; i++) {
            list.add(i ^ i >> 1);
        }
        return list;
    }
}
```

----------------------------------

解法二
```java
class Solution {
    public List<Integer> grayCode(int n) {
        List<Integer> list = new ArrayList<>();
        if (n == 0) {
            list.add(0);
            return list;
        }
        if (n == 1) {
            list.add(0);
            list.add(1);
        } else {
            List<Integer> tmp = grayCode(n - 1);
            for (int i = 0; i < tmp.size(); i++) {
                if (i % 2 == 0) {
                    list.add(tmp.get(i) << 1);
                    list.add((tmp.get(i) << 1) + 1);
                } else {
                    list.add((tmp.get(i) << 1) + 1);
                    list.add(tmp.get(i) << 1);
                }
            }
        }
        return list;
    }
}
```
>参考自https://www.jianshu.com/p/cd0e29b01811