/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 刷友题解
// 不会写递归真的是好烦
 var sortedArrayToBST = function(nums) {
    let build = (low, high) => {
        //  如果区间为空
        if (low > high) {
            return null;
        }
        let mid = low + ((high - low) >> 1);
        // 构造根节点
        return new TreeNode(nums[mid], build(low, mid - 1), build(mid + 1, high))
    };
    return build(0,nums.length-1)
};
