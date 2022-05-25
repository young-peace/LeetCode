/* 自底向下，后序遍历二叉树（左右根）
判断底层每棵子树是不是平衡树，如果平衡，使用它们的高度判断父节点是否平衡，并计算父节点的高度
如果不平衡，返回-1
 */
var isBalanced = function (root) {
    return balanced(root) !== -1;
};
var balanced = function (node) { 
    if (!node) return 0;
    const left = balanced(node.left);
    const right = balanced(node.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) { 
        return -1;
    }
    return Math.max(left, right) + 1;
}