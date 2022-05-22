/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    const dummyHead = new ListNode(0);
   dummyHead.next = head;
   // pre=head
   let pre = dummyHead;
   while (pre.next !== null) {
       if (pre.next.val == val) {
           pre.next = pre.next.next;
           return dummyHead.next;
       } else {
           pre = pre.next;
       }
   }
   return null;
};