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
        }; // map for O(1) lookups
        let stack = [];

        for (let c of s) {
            if (charObject[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === charObject[c]) {
                    stack.pop(); //pop if closing bracket is seen
                } else return false; //if top element of stack does not match opening bracket, invalid
            } else stack.push(c); //if opening bracket or non-brancket, add to stack
        }

        return stack.length === 0; //if stack is accounted for, valid
    }
}
