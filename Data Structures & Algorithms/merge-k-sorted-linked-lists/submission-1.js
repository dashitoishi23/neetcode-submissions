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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length === 0)
            return null;

        return this.divide(lists, 0, lists.length - 1);
    }

    divide(lists, left, right){
        if(left > right)
            return null;
        if(left === right)
            return lists[left];
        let mid = Math.floor((left + right)/2);

        let l = this.divide(lists, left, mid);
        let r = this.divide(lists, mid + 1, right);

        return this.mergesort(l, r);
    }

    mergesort(l, r){
        let merged = new ListNode(0);
        let curr = merged;

        while(l && r){
            if(l.val < r.val){
                curr.next = l;
                l = l.next;
            }
            else{
                curr.next = r;
                r = r.next;
            }

            curr = curr.next;
        }

        curr.next = l ? l : r;

        return merged.next;
    }
}
