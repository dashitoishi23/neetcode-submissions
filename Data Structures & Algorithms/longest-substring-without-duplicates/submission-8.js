class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charArr = s.split("");
        if(charArr.length === 0)
            return 0;
        let ans = 1;
        let i = 0;
        let j = 1;
        let currLen = 1;

        let charset = new Set();
        charset.add(charArr[0]);

        while(i < charArr.length && j < charArr.length){
            if(!charset.has(charArr[j])){
                charset.add(charArr[j]);
                currLen++;
                j++;
            }
            else{
                charset = new Set();
                i++;
                j = i + 1;
                charset.add(charArr[i]);
                currLen = 1;
            }
         ans = Math.max(ans, currLen);
        }

        return ans;
    }
}
