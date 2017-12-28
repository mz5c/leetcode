// Forward declaration of isBadVersion API.
bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int s = 1, e = n, m = 0;
        while (true) {
            if (s == e) {
                return s;
            } 
            m = (e - s) / 2 + s;
            if (isBadVersion(m)) {
                e = m;
            } else {
                s = m + 1;
            }
        }
    }
};
