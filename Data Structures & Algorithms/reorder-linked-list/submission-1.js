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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        } //found the mid-point to split the list into 2
        let second = slow.next;
        let prev = (slow.next = null); 
        //breaking the link between mid and mid+1 to split the list

        while(second){
            let tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }
        //reverse the second half of the list

        let first = head;
         second = prev;


        console.log({ first, second })

        while(second){
            let tmp1 = first.next;
            let tmp2 = second.next;

            first.next = second;
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
        }
    }
}
