/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 官方题解：倒数第k个节点，就是正数第n-k+1个节点，n为链表长度
// 反思：本来想将链表中的数存入一个数组中，找出第k个节点对应的数，然后去链表中去匹配这个数
 var getKthFromEnd = function(head, k) {
     let size = 0, cur = head;
    //  链表长度不能直接求得，需要逐个遍历计算
     while (cur) { 
         cur = cur.next;
         size++;
     }
    //  一边向后推进一边减size，即剩了几个就是倒数第几个
     while (size - k > 0) { 
         head = head.next;
         size--;
     }
     return head;
};