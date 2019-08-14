class Solution {
    private String[] arr = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if (digits.isEmpty()) {
            return result;
        }
        return getResult(result, digits, 0, "");
    }

    private List<String> getResult(List<String> result, String digits, int idx, String res) {
        if (idx == digits.length()) {
            result.add(res);
            return result;
        }
        String tmp = arr[digits.charAt(idx) - '0'];
        if (tmp.isEmpty()) {
            return getResult(result, digits, idx + 1, res);
        }
        for (int i = 0; i < tmp.length(); i++) {
            result = getResult(result, digits, idx + 1, res + tmp.charAt(i));
        }
        return result;
    }
}