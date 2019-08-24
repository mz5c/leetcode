class Solution {
    public int[] dailyTemperatures(int[] T) {
        for (int i = 0; i < T.length; i++) {
            int tmp = T[i];
            T[i] = 0;
            for (int j = i + 1; j < T.length; j++) {
                if (T[j] > tmp) {
                    T[i] = j - i;
                    break;
                }
            }
        }
        return T;
    }
}