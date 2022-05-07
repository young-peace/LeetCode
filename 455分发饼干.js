/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 书友题解
// 给最小饥饿度的孩子分配能满足他的最小的饼干
// 我们要获取大小关系，因此需要排序
 var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let child = 0, cookie = 0;
     while (child < g.length && cookie < s.length) { 
        // 如果当前饼干能满足这个孩子，两个数组各往后一步
        //  如果当前饼干不能满足这个孩子，看下个饼干能不能满足
        if (g[child] <= s[cookie]) { 
            ++child;
        }
        ++cookie;
    }
    return child;
};
console.log(findContentChildren([1,2],[1,2,3]))