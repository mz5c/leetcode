class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0) {
            return false;
        }
        int m = matrix.length;
        int n = matrix[0].length;
        for (int[] aMatrix : matrix) {
            for (int j = 0; j < n; j++) {
                if (aMatrix[j] > target) {
                    break;
                } else if (aMatrix[j] == target) {
                    return true;
                }
            }
        }
        return false;
    }
}
