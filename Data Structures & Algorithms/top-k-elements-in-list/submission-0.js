class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numCount = {};
        const bucket = Array.from({ length: nums.length + 1},() => []);

        for (const n of nums)
            numCount[n] = (numCount[n] ?? 0) + 1;
        
        for(const n in numCount){
            bucket[numCount[n]].push(n);
        }

        const ans = [];

        for(let i = bucket.length - 1; i > 0; i--){
            for(const n of bucket[i]){
                ans.push(n);
                if(ans.length === k)
                    return ans;
            }
        }

        return ans;
    }
}
