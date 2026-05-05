class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let keyList = {};
      for(let str of strs){
        let count = new Array(26).fill(0);
        let key = '';
        for(let c of str){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        key = count.join(',');
        if(!keyList[key])
            keyList[key] = [str];
        else keyList[key].push(str);
      }  

      return Object.values(keyList);
    }
}
