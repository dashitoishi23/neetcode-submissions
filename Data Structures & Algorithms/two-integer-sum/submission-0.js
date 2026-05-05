class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numberMap = new Map();
        const ans = [];

        for(let i = 0; i < nums.length; i++){
            const diff = target - nums[i];
            if(numberMap.has(diff))
                return [numberMap.get(diff), i];
            numberMap.set(nums[i], i);
        }

        return [];
    }
}
