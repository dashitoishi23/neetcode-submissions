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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while(curr){
            let temp = curr.next; //preserving curr.next to move ahead
            curr.next = prev; //reversing the link
            prev = curr; //getting ready for next iteration
            curr = temp; //moving ahead
        }

        return prev;
    }
}
