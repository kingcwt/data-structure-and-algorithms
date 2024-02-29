/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let l = 0, r = height.length - 1;
    let ans = 0;
    let lMax = height[l]
    let rMax = height[r]
    while (l < r) {
        if (lMax < rMax) {
            ans += lMax - height[l]
            l++
            lMax = Math.max(lMax, height[l])
        } else {
            ans += rMax - height[r]
            r--
            rMax = Math.max(rMax, height[r])
        }
    }
    return ans
};



console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))




// 动态规划
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

  
    let n = height.length;
    if (n < 1) return [];
    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    leftMax[0] = height[0];
    for(let i = 1; i < n; i++){
        leftMax[i] = Math.max(leftMax[i - 1],height[i])
    }
    rightMax[n - 1] = height[n - 1]
    for(let i = n - 2; i >=0; i--){
        rightMax[i] = Math.max(rightMax[i + 1],height[i])
    }

    let ans = 0;
    for(let i = 1; i < n; i++){
        ans += Math.min(leftMax[i],rightMax[i]) - height[i]
    }
    return ans;
};