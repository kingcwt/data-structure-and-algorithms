// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function(n) {

//     const map = new Map();

//     const fn = (n) =>{
//     if(n===1) return 1
//     if(n===2) return 2
//     if(map.get(n)){
//          return map.get(n)
//     }else{
//          const result = fn(n-1)+fn(n-2)
//          map.set(n,result)
//          return result
//     }
//     }

//     return fn(n)

// };

// /**
//  * 递归
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;

//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

// console.log(climbStairs(5));

// /**
//  * 递归+map
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//     const map = new Map();
//     const func = (n) =>{
//         if (n === 1) return 1;
//         if (n === 2) return 2;
//         if(map.get(n)){
//             return map.get(n)
//         }else{
//             const result = func(n-1)+func(n-2)
//             map.set(n,result)
//             return result
//         }
//     }
//     return func(n)
//   };
// /**
//  * 循环
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   let result = 0;
//   let n1 = 1;
//   let n2 = 2;

//   for (let i = 3; i <= n; i++) {
//     result = n1 + n2;
//     n1 = n2;
//     n2 = result;
//   }
//   return result;
// };
// console.log(climbStairs(5));


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 1) return 1
    if(n === 2) return 2
    const dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for(let i = 3;i <=n; i++){
        dp[i] = dp[i-1]+dp[i - 2]
    }
    return dp[n]
};
console.log(climbStairs(4))