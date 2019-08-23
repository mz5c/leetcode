class Solution {
    public int getMoneyAmount(int n) {
        if (n <= 1) {
            return 0;
        }
        int[][] dp = new int[n + 1][n + 1];
        for (int r = 2; r <= n; ++r) {
            for (int l = r - 1; l > 0; --l) {
                if (l + 1 == r) dp[l][r] = l;
                else if (l + 2 == r) dp[l][r] = l + 1;
                else {
                    dp[l][r] = Integer.MAX_VALUE;
                    for (int k = l + 2; k < r; ++k) {
                        dp[l][r] = Math.min(dp[l][r], k + Math.max(dp[l][k - 1], dp[k + 1][r]));
                    }
                }
            }
        }
        return dp[1][n];
    }
}