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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
     const inorder = (root) => { 
         if (root === null) { 
             return null;
         } else{ 
             [root.left, root.right] = [inorder(root.right), inorder(root.left)];
             return root;
         }
     }
     return inorder(root);
};