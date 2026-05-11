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
                    //the condition implies that the current sliding window is beyond repair because number 
                    //of chars to be replaced > number of chars allowed to be replaced
                    if(s[l] === c)
                        count--; //reflecting the true count of the tracked char in the window
                    l++; //reduce the window size from the left to accomodate k
                }

                ans = Math.max(ans, (r - l + 1)); //keep track of longest length so far as we traverse the window
            }
        }

        return ans;

    }
}
