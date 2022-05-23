/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
 var preorderTraversal = function(root) {
     let res = [];
     let inorder = (root) => { 
         if (root) { 
             res.push(root.val);
             inorder(root.left);
             inorder(root.right);
         }
     }
     inorder(root);
     return res;
};
// 迭代
var preorderTraversal = function(root) {
    let res = [];
    let stk = [];
    while (root || stk.length) { 
        while (root) { 
            res.push(root.val);
            stk.push(root);
            root = root.left;
        }
        root=stk.pop();
        root = root.right;
    }
    return res;
};