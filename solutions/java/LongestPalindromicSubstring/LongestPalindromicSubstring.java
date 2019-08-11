class Solution {
    public String longestPalindrome(String s) {
        if ("".equals(s) || s.length() == 1) {
            return s;
        }
        int minStart = 0;
        int maxLen = 0;
        int i,j,k;
        i = 0;
        while (i < s.length()) {
            if (s.length() - i <= maxLen/2) {
                break;
            }
            j = i;
            k = i;
            while (k < s.length() - 1 && s.charAt(k + 1) == s.charAt(k)) {
                k++;
            }
            i = k + 1;
            while (k < s.length() - 1 && j > 0 && s.charAt(k + 1) == s.charAt(j - 1)) {
                k++;
                j--;
            }
            if (k - j + 1 > maxLen) {
                minStart = j;
                maxLen = k - j + 1;
            }
        }
        return s.substring(minStart, minStart + maxLen);
    }
}