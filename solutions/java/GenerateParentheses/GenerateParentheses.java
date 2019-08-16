class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        getResult(result, n, n, "");
        return result;
    }

    private void getResult(List<String> list, int left, int right, String res) {
        if (left == 0 && right == 0) {
            list.add(res);
        } else {
            if (left > 0) {
                getResult(list, left - 1, right, res + "(");
            }
            if (right > 0 && left < right) {
                getResult(list, left, right - 1, res + ")");
            }
        }
    }
}