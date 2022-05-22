/**
 * Definition for singly-linked list.

 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 /* var mergeTwoLists = function(list1, list2) {
     if (list1 === null) {
         return list2;
     } else if (list2 === null) {
         return list1;
     } else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
         return list1;
     } else { 
        list2.next = mergeTwoLists(list1.list2.next);
         return list2;
     }

}; */
// 官方题解：递归
var mergeTwoLists = function(l1, l2) {
    if(l1 === null){
        return l2;
    }
    if(l2 === null){
        return l1;
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
// 迭代
var mergeTwoLists = function(l1, l2) {
    const prehead = new ListNode(-1);
    let pre = prehead;
    while (l1 !== null && l2 !== null) { 
        if (l1.val <= l2.val) {
            pre.next = l1;
            l1 = l1.next;
        } else { 
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    pre.next = l1 === null ? l2 : l1;
    return prehead.next;
};
console.log(mergeTwoLists([1,2,4],[1,3,4]))