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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = { val: 0, next: null }; //we will return this once ansHead is constructed
        let ansHead = dummy;

        while(list1 && list2){
            if(list1.val < list2.val){
                ansHead.next = list1;
                list1 = list1.next;
            }
            else{
                ansHead.next = list2;
                list2 = list2.next;
            }
            ansHead = ansHead.next;
        }

        if(list1)
            ansHead.next = list1;
        else
            ansHead.next = list2;

        return dummy.next;
    }
}
