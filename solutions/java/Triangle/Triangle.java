class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        int n = triangle.size();
        List<Integer> list = triangle.get(n - 1);
        for (int i = n - 2; i >= 0; i--) {
            for (int j = 0; j <= i; j++) {
                list.set(j, Math.min(list.get(j), list.get(j + 1)) + triangle.get(i).get(j));
            }
        }
        return list.get(0);
    }
}