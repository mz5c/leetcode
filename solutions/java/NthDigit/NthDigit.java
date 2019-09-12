class Solution {
    public int findNthDigit(int n) {
        int len = 1;
        long count = 9;
        long index = 1;
        while (n > len * count) {
            n -= len * count;
            len++;
            count *= 10;
            index *= 10;
        }
        index += (n - 1) / len;
        return String.valueOf(index).charAt((n - 1) % len) - '0';
    }
}