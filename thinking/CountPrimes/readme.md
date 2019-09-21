### 解题思路
>题目比较简单，使用数组记录2-n之间的质数合数的位置  
>看到下面代码及注释

```java
class Solution {
    public int countPrimes(int n) {
        int count = 0;//记录质数个数
        int[] arr = new int[n];//初始化一个数组记录质数位置
        for (int i = 2; i < n; i++) {
            if (arr[i] == 0) {
                count++;
                //下面的循环用于标记处所有包含约数i的位置
                for (int j = 2; i * j < n; j++) {
                    arr[i * j] = 1;
                }
            }
        }
        return count;
    }
}
```