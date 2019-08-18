class Solution {
    public void nextPermutation(int[] nums) {
        for (int i = nums.length -2; i >= 0; i--){
            if (nums[i] < nums[i + 1]){ //需要交换的条件
                int j = nums.length - 1;
                while (nums[i] >= nums[j]){ //找到大一点点的值
                    j--;
                }
                swap(nums, i, j);
                reverse(nums, i + 1);
                break;
            }
            if (i == 0) { //整个数组是降序排序，则重新升序排序
                reverse(nums, 0);
            }
        }
    }

    private void swap(int[] nums, int i, int j){
        int tmp = nums[j];
        nums[j] = nums[i];
        nums[i] = tmp;
    }

    private void reverse(int[] nums, int start){
        int i = start, j = nums.length - 1;
        while (i < j){
            swap(nums, i,j );
            i++;
            j--;
        }
    }
}