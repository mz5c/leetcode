class Solution {
    public String largestNumber(int[] nums) {
        List<Integer> list = Arrays.stream(nums).boxed().sorted((o1, o2) -> {
            String a = o1 + "" + o2;
            String b = o2 + "" + o1;
            return b.compareTo(a);
        }).collect(Collectors.toList());
        StringBuilder result = new StringBuilder();
        for (Integer i : list) {
            result.append(i);
        }
        return result.toString().charAt(0) == '0' ? "0" : result.toString();
    }
}