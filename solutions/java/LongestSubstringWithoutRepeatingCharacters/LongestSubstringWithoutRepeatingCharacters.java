class Solution {
    public int lengthOfLongestSubstring(String s) {
        String curStr = "";
        int maxLen = 0;
        int lastPos = -1;
        for (int i = 0; i < s.length(); i++) {
            lastPos = curStr.indexOf(s.charAt(i));
            if (-1 == lastPos) {
                curStr += s.charAt(i);
                maxLen = curStr.length() > maxLen ? curStr.length() : maxLen;
            } else {
                curStr = curStr.substring(lastPos + 1) + s.charAt(i);
            }
        }
        return maxLen;
    }
}