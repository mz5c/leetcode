class Solution {
    public int romanToInt(String s) {
        Map<String, Integer> map = new HashMap<>();
        map.put("I", 1);
        map.put("V", 5);
        map.put("X", 10);
        map.put("L", 50);
        map.put("C", 100);
        map.put("D", 500);
        map.put("M", 1000);
        String[] arr = s.split("");
        int res = 0;
        for (int i = 0; i < arr.length; i++) {
            if (i < arr.length - 1 && map.get(arr[i]) < map.get(arr[i+1])) {
                res -= map.get(arr[i]);
            } else {
                res += map.get(arr[i]);
            }
        }
        return res;
    }
}