/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
/* 
逆向双指针
利用两个数组已经有序&一个数组空有另一个数组位置的条件
*/
 var merge = function(A, m, B, n) {
     let pa = m - 1, pb = n - 1;
     let tail = m + n - 1;
     var cur;
     while (pa >= 0 || pb >= 0) { 
         if (pa === -1) {
             cur = B[pb--];
         } else if (pb === -1) {
             cur = A[pa--];
         } else if (A[pa] > B[pb]) {
             cur = A[pa--];
         } else { 
             cur = B[pb--];
         }
         A[tail--] = cur;
     }
};