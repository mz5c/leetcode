class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (i == 0 || nums[i] != nums[i - 1]) {
                int x = i + 1;
                int y = nums.length - 1;
                while (x < y) {
                    if (nums[i] + nums[x] + nums[y] == 0) {
                        res.add(Arrays.asList(nums[i], nums[x], nums[y]));
                        while (x < y && nums[x] == nums[x + 1]) x++;
                        while (x < y && nums[y - 1] == nums[y]) y--;
                        x++;
                        y--;
                    } else if (nums[i] + nums[x] + nums[y] < 0) {
                        while (x < y && nums[x] == nums[x + 1]) x++;
                        x++;
                    } else {
                        while (x < y && nums[y - 1] == nums[y]) y--;
                        y--;
                    }
                }
            }
        }
        return res;
    }
}