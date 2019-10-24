class Solution {
    public int hammingDistance(int x, int y) {
        int count = 0;
        for (char c : Integer.toBinaryString(x ^ y).toCharArray()) {
            if (c == '1') {
                count++;
            }
        }
        return count;
    }
}