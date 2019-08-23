### 解法思路
递归（基础解法）
```java
class Solution {
    public int getMoneyAmount(int n) {
        int[][] table = new int[n + 1][];
        for (int i = 0; i < n + 1; i++) {
            table[i] = new int[n + 1];
        }
        return getResult(table, 1, n);
    }

    private int getResult(int[][] t, int s, int e) {
        if (s >= e) {
            return 0;
        }
        if (s + 1 == e) {
            return s;
        } else if (s + 2 == e) {
            return (s + e) / 2;
        }
        if (t[s][e] != 0) {
            return t[s][e];
        }
        int min = s + getResult(t, s + 1, e);
        for (int x = s + 1; x <= e; x++) {
            int tmp = x + Math.max(getResult(t, s, x - 1), getResult(t, x + 1, e));
            min = Math.min(min, tmp);
        }
        t[s][e] = min;
        return min;
    }
}
```
动态规划算法
```java
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
```