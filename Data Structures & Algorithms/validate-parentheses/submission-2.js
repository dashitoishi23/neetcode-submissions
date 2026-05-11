class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let charObject = {
            "]": "[",
            "}": "{",
            ")": "(",
        };
        let stack = [];

        for (let c of s) {
            if (charObject[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === charObject[c]) {
                    stack.pop();
                } else return false;
            } else stack.push(c);
        }

        return stack.length === 0;
    }
}
