//BF算法
class Solution1 {
    public int strStr(String haystack, String needle) {
        int i = 0;
        int j = 0;
        while (j < needle.length() && i - j <= haystack.length() - needle.length()) {
            if (haystack.charAt(i) == needle.charAt(j)) {
                i++;
                j++;
            } else {
                i = i - j + 1;
                j = 0;
            }
        }
        if (j == needle.length()) {
            return i - j;
        }
        return -1;
    }
}
//KMP算法
class Solution2 {
    private int indexKMP(String s, String t, int[] next) {
        int i = 0;
        int j = 0;
        while (i < s.length() && j < t.length()) {
            if (j < 0) {
                i++;
                j = 0;
            } else if (s.charAt(i) == t.charAt(j)) {
                i++;
                j++;
            } else {
                j = next[j];
            }
        }
        if (j == t.length()) {
            return i - j;
        }
        return -1;
    }

    private int[] getNext(String t) {
        int[] arr = new int[t.length()];
        for (int i = 0; i < arr.length; i++) {
            if (i == 0) {
                arr[0] = -1;
                continue;
            }
            int j = arr[i - 1];
            while (j >= 0 && t.charAt(i - 1) != t.charAt(j)) {
                j = arr[j];
            }
            if (j == -1) {
                arr[i] = 0;
            } else if (t.charAt(i - 1) == t.charAt(j)) {
                arr[i] = j + 1;
            }
        }
        return arr;
    }

    public int strStr(String haystack, String needle) {
        return indexKMP(haystack, needle, getNext(needle));
    }
}