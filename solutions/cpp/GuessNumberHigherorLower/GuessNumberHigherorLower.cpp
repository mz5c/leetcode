// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
    int guessNumber(int n) {
        int max_num = n, min_num = 1;
        while (true) {
            int m = (max_num - min_num) / 2 + min_num;
            int res = guess(m);
            if (res == 0) {
                return m;
            } else if (res == 1) {
                min_num = m + 1;
            } else {
                max_num = m - 1;
            }
        }
    }
};
