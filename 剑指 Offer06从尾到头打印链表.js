/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    let nodes = [];
  while (head != null) {
    nodes.unshift(head.val);
    head = head.next;
  }
  return nodes;
};