//
// function tupleSameProduct(nums) {
//     console.log(nums)
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const key = nums[i] * nums[j]
//             map.set(key, (map.get(key) || 0) + 1)
//         }
//     }
//
//
//     console.log(map.values())
//
//     let ans = 0;
//     for(const v of map.values()){
//         ans += v * (v - 1) * 4
//     }
//
//     return ans
// };



function tupleSameProduct(nums){
    const map = new Map()
    const len = nums.length;
    for(let i=0;i< len;i++){
        for(let j = i+1;j<len;j++){
            const key = nums[i] * nums[j]
            map.set(key, (map.get(key)||0)+1)
        }
    }

    let ans = 0;
    for(const v of map.values()){
        ans += v * (v - 1) * 4
    }

    return ans
}



console.log(tupleSameProduct([2, 3, 4, 6]))