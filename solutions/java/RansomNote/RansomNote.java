class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        if (ransomNote.length() > magazine.length()) {
            return false;
        }
        int[] log = new int[26];
        for (char c: ransomNote.toCharArray()) {
            int x = magazine.indexOf(c, log[c-'a']);
            if(x == -1) {
                return false;
            } else {
                log[c-'a'] = x+1;
            }
        }
        return true;
    }
}