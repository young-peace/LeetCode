/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 官方题解一；哈希表
// 先存一个链表的数到哈希表中，遍历另一个链表查看是否有重复元素
var getIntersectionNode = function (headA, headB) {
    const visted = new Set();
    while (headA !== null) { 
        visted.add(headA);
        headA = headA.next;
    }
    while (headB !== null) { 
        if (visted.has(headB)) { 
            return headB;
        }
        headB = headB.next;
    }
    return null;
};
// 官方题解二：双指针
// 空间复杂度降至O(1)
/* 
headA、headB链表长度分别为m、n，假设headA不相交的有a个节点，链表B不相交的有b个节点，相交的部分有c个节点
则a+c=m，b+c=n
创建两个指针pA、pB，分别指向headA、headB，每步都需要同时更新指针
如果pA为空，则将其移到headB的头节点，pB同理
在指针pA移动了a+c+b次，pB移动了b+c+a次，会到达相交节点
*/
 var getIntersectionNode = function(headA, headB) {
     if (headA === null || headB === null) { 
         return null;
     }
     let pA = headA, pB = headB;
     while (pA !== pB) { 
         pA = pA === null ? headB : pA.next;
         pB = pB === null ? headA : pB.next;
     }
     return pA;
};