class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i < nums.length - 3; i++) {
            if (i == 0 || nums[i] != nums[i-1]) {
                for (int j = i + 1; j < nums.length - 2; j++) {
                    if (j == i + 1 || nums[j] != nums[j-1]) {
                        int x = j + 1;
                        int y = nums.length - 1;
                        while (x < y) {
                            if (nums[i] + nums[j] + nums[x] + nums[y] == target) {
                                res.add(Arrays.asList(nums[i], nums[j], nums[x], nums[y]));
                                while (x < y && nums[x] == nums[x + 1]) x++;
                                x++;
                                while (x < y && nums[y - 1] == nums[y]) y--;
                                y--;
                            } else if (nums[i] + nums[j] + nums[x] + nums[y] < target) {
                                while (x < y && nums[x] == nums[x + 1]) x++;
                                x++;
                            } else {
                                while (x < y && nums[y - 1] == nums[y]) y--;
                                y--;
                            }
                        }
                    }
                }
            }
        }
        return res;
    }
}