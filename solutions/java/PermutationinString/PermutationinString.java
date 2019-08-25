class Solution {
    public static boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) {
            return false;
        }
        //统计s1中每个字符出现的次数，s2中每个窗口长度为s1.length的窗口中字符出现的次数
        int[] hash1 = new int[26];
        int[] hash2 = new int[26];
        for (int i=0;i<s1.length();i++) {
            hash1[s1.charAt(i)-'a'] ++;
            hash2[s2.charAt(i)-'a'] ++;
        }
        if (Arrays.equals(hash1, hash2)) {
            return true;
        }
        for(int i=s1.length();i<s2.length();i++) {
            hash2[s2.charAt(i)-'a'] ++;
            hash2[s2.charAt(i-s1.length())-'a'] --;
            if(Arrays.equals(hash1, hash2)) {
                return true;
            }
        }
        return false;
    }
}