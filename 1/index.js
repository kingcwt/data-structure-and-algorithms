/**
 * 暴力求解
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
    }
};
console.log(twoSum([3,2,4],6));

/**
 * 使用map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let current = target - nums[i];
        if(map.has(current)){
            return [i,map.get(current)]
        }else{
            map.set(nums[i],i)
        }
    }
};