class Solution {
    public boolean isOneBitCharacter(int[] bits) {
        for (int i = 0; i < bits.length; i++) {
            if (bits[i] == 1) {
                i++;
            } else if (bits[i] == 0 && i == bits.length - 1) {
                return true;
            }
        }
        return false;
    }
}