/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* 
官方题解：先将链表中的数依次放入数组中，在数组中利用双指针验证是否是回文串
*/
 var isPalindrome = function(head) {
     const vals = [];
     while (head !== null) { 
         vals.push(head.val);
         head = head.next;
     }
     for (let i = 0, j = vals.length - 1; i < j; ++i, --j) { 
         if (vals[i] !== vals[j]) { 
             return false;
         }
     }
};