class Solution {
    public int trap(int[] height) {
        int oldSum = sumArray(height);
        for (int i = 0; i < height.length;) {
            int j = i + 1;
            if (j < height.length && height[j] == height[i]) {
                i++;
                continue;
            }
            int tmp = height[i];
            while (j < height.length && height[j] < tmp) {
                j++;
            }
            if (j == height.length) {
                break;
            }
            i++;
            while (i < j) {
                height[i] = tmp;
                i++;
            }
        }
        for (int i = height.length - 1; i >= 0;) {
            int j = i - 1;
            if (j >= 0 && height[j] == height[i]) {
                i--;
                continue;
            }
            int tmp = height[i];
            while (j >= 0 && height[j] < tmp) {
                j--;
            }
            if (j == -1) {
                break;
            }
            i--;
            while (i > j) {
                height[i] = tmp;
                i--;
            }
        }
        int newSum = sumArray(height);
        return newSum - oldSum;
    }

    private int sumArray(int[] height) {
        int sum = 0;
        for (int aHeight : height) {
            sum += aHeight;
        }
        return sum;
    }
}