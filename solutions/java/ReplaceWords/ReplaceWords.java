class Solution {
    public String replaceWords(List<String> dict, String sentence) {
        String[] strings = sentence.split(" ");
        for (int i = 0; i < strings.length; i++) {
            for (String s : dict) {
                if (strings[i].indexOf(s) == 0) {
                    strings[i] = s;
                    break;
                }
            }
        }
        return String.join(" ", strings);
    }
}