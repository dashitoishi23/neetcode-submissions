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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0;
        let curr = head;

        while(curr){
            len++;
            curr = curr.next;
        }

        curr = head;

        let index = 0;
        if(len - n === 0){
            return head.next;
        }
        while(index < len - 1){
            if(index === len - n - 1){
               curr.next = curr.next.next;
               break;
            }

            curr = curr.next;
            index++;
        }

        return head;

    }
}
