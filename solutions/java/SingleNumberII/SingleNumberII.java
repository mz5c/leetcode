class Solution {
    public int singleNumber(int[] nums) {
        Set<Integer> set = new HashSet<>();
        Map<Integer, Integer> map = new HashMap<>();
        for (int i : nums) {
            if (map.containsKey(i)) {
                set.remove(i);
            } else {
                map.put(i, 1);
                set.add(i);
            }
        }
        for (int res : set) return res;
        return 0;
    }
}