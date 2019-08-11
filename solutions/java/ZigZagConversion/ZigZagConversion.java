class Solution {
    public String convert(String s, int numRows) {
        if (numRows < 2) {
            return s;
        }
        int num = numRows * 2 - 2;
        String[] result = new String[numRows];
        for (int i = 0; i < numRows; i++) {
            result[i] = "";
        }
        for (int idx = 0; idx < s.length(); idx++) {
            int _idx = idx % num;
            _idx = _idx < numRows ? _idx : num - _idx;
            result[_idx] += s.charAt(idx);
        }
        return String.join("", result);
    }
}