class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charset = new Set(s) //set of all chars
        let ans = 0;

        for(let c of charset){
            let count = 0;
            let l = 0; //start a new sliding window for every char

            for(let r = 0; r < s.length; r++){
                if(s[r] === c)
                    count++; 
                
                while((r - l + 1) - count > k){
                    if(s[l] === c)
                        count--;
                    l++;
                }

                ans = Math.max(ans, (r - l + 1));
            }
        }

        return ans;

    }
}
