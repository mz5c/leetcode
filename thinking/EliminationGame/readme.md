### 解题思路
>最好的方法就是先自己在草稿纸举几个例子找规律，剩下的就看代码理解吧
```java
class Solution {
    public int lastRemaining(int n) {
        boolean left = true;//清除元素的方向
        int step = 1;
        int head = 1;//记录没清除后第一个元素的值
        while (n > 1) {
            if (left || n % 2 == 1) {
                head += step;
            }
            step *= 2;
            n /= 2;
            left = !left;
        }
        return head;
    }
}
```