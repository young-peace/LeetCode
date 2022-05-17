/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    // pre=head
    let pre = dummyHead;
    while (pre.next !== null) {
        if (pre.next.val == val) {
            pre.next = pre.next.next;
        } else {
            pre = pre.next;
        }
    }
    return dummyHead.next;
};


