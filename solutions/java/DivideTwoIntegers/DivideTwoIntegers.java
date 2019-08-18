class Solution {
    public int divide(int dividend, int divisor) {
        // 判断符号,使用异或
        boolean flag = (dividend ^ divisor) >= 0;
        // 判断边界,若被除数为最小值且除数为-1，那么结果一定越界，返回最大值即可
        // 若除数为最小值，且被除数大于最小值，那么一定商一定为0
        if (divisor == 0 || (dividend == Integer.MIN_VALUE && divisor == -1)) {
            return Integer.MAX_VALUE;
        }
        if (divisor == Integer.MIN_VALUE && dividend > Integer.MIN_VALUE) {
            return 0;
        }
        // 采用除数不断向左移1位的方法与被除数相比较。直至找到一个除数不大于被除数的移位次数
        // 除数向左移n位相当于 除数=除数*2的n次方，相当于产生了2的n次方个除数

        int result = 0;
        long did = dividend < 0 ? -(long)dividend : dividend;
        long dir = divisor < 0 ? -(long)divisor : divisor;
        while (did >= dir) {
            long temp = dir;
            int mul = 1;
            while (did >= temp<<1) {
                temp = temp << 1;
                mul = mul << 1;
            }
            did -= temp;
            result += mul;
        }
        return flag ? result : -result;
    }
}