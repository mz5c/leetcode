class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int csum = nums[0] + nums[1] + nums[2];
        for (int i = 0; i < nums.length - 2; i++) {
            if (i == 0 || nums[i] != nums[i - 1]) {
                int x = i + 1;
                int y = nums.length - 1;
                while (x < y) {
                    int sum = nums[i] + nums[x] + nums[y];
                    if (sum == target) {
                        return target;
                    } else if (sum < target) {
                        while (x < y && nums[x] == nums[x + 1]) x++;
                        x++;
                    } else {
                        while (x < y && nums[y - 1] == nums[y]) y--;
                        y--;
                    }
                    csum = Math.abs(sum - target) < Math.abs(csum - target) ? sum : csum;
                }
            }
        }
        return csum;
    }
}