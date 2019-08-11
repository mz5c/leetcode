class Solution {
    public int myAtoi(String str) {
        int result = 0;
        int digitIndex = 0; // index of the first digit.
        boolean positive = true;
        while (digitIndex < str.length() && Character.isWhitespace(str.charAt(digitIndex))) { // skip whitespaces.
            digitIndex++;
        }
        if (digitIndex == str.length()) {
            return 0; // may happen if str consists of whitespaces only or is empty.
        }
        if (str.charAt(digitIndex) == '-') {
            positive = false;
            digitIndex++;
        } else if (str.charAt(digitIndex) == '+') {
            digitIndex++;
        }
        for (int i = digitIndex; i < str.length(); i++) {
            char digit = str.charAt(i);
            if (!Character.isDigit(digit)) {
                break;
            }
            if (result > Integer.MAX_VALUE / 10) {
                return positive ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            int remainsBeforeOverflow = Integer.MAX_VALUE - 10 * result; // how much can you add without an overflow.
            if (remainsBeforeOverflow < digit - '0') {
                return positive ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            result = 10 * result + digit - '0';
        }
        return result * (positive ? 1 : -1);
    }
}