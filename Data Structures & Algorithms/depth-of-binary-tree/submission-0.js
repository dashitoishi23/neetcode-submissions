/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(root === null) return 0;

        return this.calcDepth(root, 0);

    }

    calcDepth(root, len) {
        if(root !== null) len++;

        if(root === null) return len;
        let leftLen = this.calcDepth(root.left, len);
        let rightLen = this.calcDepth(root.right, len);

        return leftLen > rightLen ? leftLen : rightLen;
    }
}
