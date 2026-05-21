# find-the-length-of-the-longest-common-prefix
```java
class Solution {
    public int longestCommonPrefix(int[] arr1, int[] arr2) {
        Set<Integer> seen = new HashSet<>();
        
        for (int num : arr1) {
            while (num > 0) {
                seen.add(num);
                num /= 10;
            }
        }

        int best = 0;
        for (int num : arr2) {
            while (num > 0) {
                if (seen.contains(num)) {
                    best = Math.max(best, num);
                }
                num /= 10;
            }
        }

        return best == 0 ? 0 : String.valueOf(best).length();
    }
}
```