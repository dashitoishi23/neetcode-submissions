class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        const sChar = {};
        const tChar = {};

        for(let i = 0; i < s.length; i++){
            sChar[s[i]] = (sChar[s[i]] ?? 0) + 1;
            tChar[t[i]] = (tChar[t[i]] ?? 0) + 1;
        }

        for(const c in sChar){
            if(sChar[c] != tChar[c])
                return false;
        }
        return true;
    }
}
