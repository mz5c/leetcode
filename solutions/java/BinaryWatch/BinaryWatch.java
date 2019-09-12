class Solution {
    public List<String> readBinaryWatch(int num) {
        List<String> list = new ArrayList<>();
        if (num == 0) {
            list.add("0:00");
            return list;
        }
        char[] arr = "0000000000".toCharArray();
        recursive(list, arr, 0, num);
        return list;
    }

    private void recursive(List<String> list, char[] arr, int idx, int n) {
        for (int i = idx; i < 11 - n; i++) {
            char[] tmp = arr.clone();
            tmp[i] = '1';
            if (n == 1) {
                String s = getResult(tmp);
                if (!"".equals(s)) {
                    list.add(s);
                }
            } else {
                recursive(list, tmp, i + 1, n - 1);
            }
        }
    }

    private String getResult(char[] arr) {
        int a = Integer.valueOf(String.valueOf(Arrays.copyOfRange(arr, 0, 4)), 2);
        int b = Integer.valueOf(String.valueOf(Arrays.copyOfRange(arr, 4, 10)), 2);
        if (a > 11 || b > 59) {
            return "";
        }
        return b > 9 ? a + ":" + b : a + ":0" + b;
    }
}