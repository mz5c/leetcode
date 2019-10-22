class Solution {
    public boolean checkPerfectNumber(int num) {
        int n = 1;
        for (int i = 2; i < Math.sqrt(num); i++) {
            if (num % i == 0) {
                n += i;
                if (num / i != i) {
                    n += num / i;
                }
            }
        }
        return n == num && n > 1;
    }
}