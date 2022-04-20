// var binaryTreePaths = function(root) {
//     //递归遍历+递归三部曲
//     let res=[];
//     //1. 确定递归函数 函数参数
//     const getPath=function(node,curPath){
//      //2. 确定终止条件，到叶子节点就终止
//         console.log(node)
//         if(node.left===null&&node.right===null){
//             curPath += node.val;
//             console.log(curPath)
//             res.push(curPath);
//             console.log(res)
//             return ;
//         }
//         //3. 确定单层递归逻辑
//         curPath += node.val + '->';
//         console.log(curPath)
//         node.left&&getPath(node.left,curPath);
//         node.right&&getPath(node.right,curPath);
//     }
//     getPath(root,'');
//     return res;
// };
const binaryTreePaths = (root) => {
    const res = [];
  
    const buildPath = (root, pathStr) => {
      if (root == null) { // 遍历到null
        return;           // 结束当前递归分支
      }
      if (root.left == null && root.right == null) { // 遍历到叶子节点
        pathStr += root.val; // 路径末尾了，不用加箭头
        res.push(pathStr);   // 加入解集
        return;
      }
      pathStr += root.val + '->'; // 处理非叶子节点，要加箭头
      buildPath(root.left, pathStr); // 基于当前的pathStr，递归左子树
      buildPath(root.right, pathStr); // 基于当前的pathStr，递归右子树
    };
  
    buildPath(root, '');
    return res;
  };
let root=[1,2,3,null,5]
console.log(binaryTreePaths(root)) 
 