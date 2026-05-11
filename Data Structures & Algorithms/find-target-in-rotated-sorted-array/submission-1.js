class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while(l < r){
            let m = Math.floor((l + r)/2);
            if(nums[m] > nums[r]) l = m + 1;
            else r = m;
        }

        let ans = this.binarySearch(nums, 0, l - 1, target)
        if (ans !== -1) return ans;
        return this.binarySearch(nums, l, nums.length - 1, target)
    }

    binarySearch(nums, l, r, target){
        while(l <= r){
            let m = Math.floor((l + r)/2);
            if(nums[m] === target) return m;
            if(target < nums[m]) r = m - 1;
            else l = m + 1;
        }

        return -1;
    }
}
