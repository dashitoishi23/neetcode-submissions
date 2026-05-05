class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefix = new Array(n);
        const suffix = new Array(n);

        prefix[0] = 1;
        suffix[n - 1] = 1;

        for(let i = 1; i < nums.length; i++){
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        for(let j = n - 2; j >= 0; j--)[
            suffix[j] = nums[j + 1] * suffix[j + 1]
        ]

        const ans = new Array(n);
        for(let i = 0; i < n; i++){
            ans[i] = prefix[i] * suffix[i];
        }

        return ans;
    }
}
