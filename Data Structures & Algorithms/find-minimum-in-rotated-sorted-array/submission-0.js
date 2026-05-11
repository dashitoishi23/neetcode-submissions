class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let ans = nums[0];

        while(l <= r){
            if(nums[l] <= nums[r]){
                ans = Math.min(ans, nums[l]);
                break;
            } //if current half is sorted, return 1st element of that half
            let m = l + Math.floor((r - l)/2);
            ans = Math.min(ans, nums[m]);
            //keep track of mid in case the shortest is between the 2 halves
            if(nums[m]>=nums[l]) l = m + 1;
            //shift window to right of mid to get to sorted half
            else r = m - 1;
            //shift window to left of mid to get to sorted half
        }

        return ans;
    }
}
