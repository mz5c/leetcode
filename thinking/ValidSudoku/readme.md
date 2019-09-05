### 解题思路
>理解题意，是求该数独中已填入数字的每行或每列或者每个九宫格是否有重复数字  
>解法很暴力，遍历数独每个元素并记录每行每列及每个九宫格数字的占用情况并作判断即可  
>直接看代码注释
```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        Set<String> s1 = new HashSet<>();//记录数独每行的数字占用情况，格式i_n，i表示第i行，n表示1到9
        Set<String> s2 = new HashSet<>();//记录数独每列的数字占用情况，格式j_n，j表示第j行，n表示1到9
        Set<String> s3 = new HashSet<>();//记录数独每个九宫格的数字占用情况，格式k_n，k表示第k个九宫格，n表示1到9
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.') {
                    int k = (i / 3) * 3 + j / 3;//计算(i,j)在第k个九宫格
                    String tmp = "_" + board[i][j];
                    //判断每行或者每列或者每个九宫格是否有数字重复
                    if (s1.contains(i + tmp) || s2.contains(j + tmp) || s3.contains(k + tmp)) {
                        return false;
                    }
                    s1.add(i + tmp);
                    s2.add(j + tmp);
                    s3.add(k + tmp);
                }
            }
        }
        return true;
    }
}
```