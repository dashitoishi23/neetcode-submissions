class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charMap = new Map(); //frequency map of every char
        let maxFreq = 0;
        let l = 0;
        let ans = 0;

        for(let r = 0; r < s.length; r++){
            charMap.set(s[r], (charMap.get(s[r]) || 0) + 1); //setting the freq of every char;
            maxFreq = Math.max(maxFreq, charMap.get(s[r])); //tracking the max freq of current char

            while((r - l + 1) - maxFreq > k){
            //this condition implies that the chars to be replaced (non-frequent) are more than k
            charMap.set(s[l], (charMap.get(s[l]) - 1)); //reflect true freq of current window
            l++; //shrink window from the left to accomodate k
            }

            ans = Math.max(ans, (r - l + 1)); //keep track of longest window so far
            
        }

        return ans;
    }
}
