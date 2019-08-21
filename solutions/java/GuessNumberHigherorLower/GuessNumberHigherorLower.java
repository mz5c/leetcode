/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int max = n;
        int min = 1;
        while (true) {
            int m = (max - min) / 2 + min;
            int res = guess(m);
            if (res == 0) {
                return m;
            }
            if (res == 1) {
                min = m + 1;
            } else {
                max = m - 1;
            }
        }
    }
}