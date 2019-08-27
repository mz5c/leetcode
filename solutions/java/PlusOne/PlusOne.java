class Solution {
    public int[] plusOne(int[] digits) {
        for (int i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {//当前位数字小于9则直接加1返回
                digits[i]++;
                return digits;
            }
            //否则当前位置0，进位加1继续比较
            digits[i] = 0;
        }
        //最高位进位加一
        int[] res = new int[digits.length + 1];
        res[0] = 1;
        System.arraycopy(digits, 0, res, 1, res.length - 1);
        return res;
    }
}