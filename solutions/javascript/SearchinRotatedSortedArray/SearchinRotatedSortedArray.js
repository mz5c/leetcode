/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length-1;
    while( low <= high){
        let mid = low + (( high - low) >> 1);
        if( nums[mid] == target) {
            return mid;
        }
        if( nums[mid] > nums[high]){
            if( nums[mid] > target && target >= nums[low]) high = mid - 1;
            else low = mid + 1;
        }else{
            if( nums[mid] < target && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return -1;
};
