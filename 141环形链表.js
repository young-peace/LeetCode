// 标记法
// 给遍历过地节点打记号，如果遍历过程中遇到有记号地说明有环
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    while (head) { 
        if (head.tag) { 
            return true;
        }
        head.tag = true;
        head = head.next;
    }
    return false;
};