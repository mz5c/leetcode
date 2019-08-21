class Solution {

    private int[] origin;
    private Random rand;

    public Solution(int[] nums) {
        origin = nums;
        rand = new Random();
    }

    /** Resets the array to its original configuration and return it. */
    public int[] reset() {
        return origin;
    }

    /** Returns a random shuffling of the array. */
    public int[] shuffle() {
        int[] arr = origin.clone();
        for (int i = arr.length - 1; i > 0; i--) {
            int rd = rand.nextInt(i + 1);
            int tmp = arr[i];
            arr[i] = arr[rd];
            arr[rd] = tmp;
        }
        return arr;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */