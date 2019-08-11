class Solution {
    public int reverse(int x) {
        boolean sign = x >= 0;
        String result = new StringBuffer(Math.abs((long)x) + "").reverse().toString();
        long l = Long.valueOf(result);
        l = sign ? l : -l;
        if (l > Integer.MAX_VALUE || l < Integer.MIN_VALUE) {
            return 0;
        }
        return (int)l;
    }
}