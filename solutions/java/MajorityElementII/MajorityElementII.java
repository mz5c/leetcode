class Solution {
    public List<Integer> majorityElement(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        List<Integer> list = new ArrayList<>();
        for (int i = 0 ; i < nums.length; i++) {
            map.put(nums[i], map.containsKey(nums[i]) ? map.get(nums[i]) + 1 : 1);
        }
        int tmp = nums.length / 3;
        map.forEach((key, value) -> {
            if (value > tmp) {
                list.add(key);
            }
        });
        return list;
    }
}