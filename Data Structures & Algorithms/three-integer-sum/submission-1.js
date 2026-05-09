class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const ans = [];

        for(let i = 0; i< nums.length - 1; i++){
            if(nums[i] > 0) break;//all numbers are +ve, no more triplets
            if(i > 0 && nums[i] === nums[i - 1]) continue; //skip duplicates

            let l = i + 1;
            let r = nums.length - 1;
            //start a 2-pointer approach
            while(l < r){
                const target = nums[i] + nums[l] + nums[r];
                if (target < 0){
                    l++;
                }
                else if(target > 0){
                    r--;
                }
                else if(target === 0){
                    ans.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while(l < r && nums[l - 1] === nums[l]){
                        l++;
                    }
                }
            }
        }
        return ans;
    }
}