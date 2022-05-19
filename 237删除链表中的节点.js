/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 一般删除节点是要找到这个节点的下个节点，但此题可以将这个节点用下个节点覆盖，然后删除下个节点(太骚了)
 var deleteNode = function(node) {
     node.val = node.next.val;
     node.next = node.next.next;
};