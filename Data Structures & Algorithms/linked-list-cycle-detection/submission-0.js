/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let visitedSet = new Set();
        let list = head;
        while(list){
            if(visitedSet.has(list))
                return true;
            visitedSet.add(list);
            list = list.next;
        }
        return false;
    }
}
