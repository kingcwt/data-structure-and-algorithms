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