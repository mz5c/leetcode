class Solution {
    public int findMinArrowShots(int[][] points) {
        if (points.length == 0) {
            return 0;
        }
        Arrays.sort(points, new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[1] == o2[1] ? o1[0] - o2[0] : o1[1] - o2[1];
            }
        });
        int count = 1;
        int arrow = points[0][1];
        for (int i = 1; i < points.length; i++) {
            if (points[i][0] > arrow) {
                arrow = points[i][1];
                count++;
            }
        }
        return count;
    }
}