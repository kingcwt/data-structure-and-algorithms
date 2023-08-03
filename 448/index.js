/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = [];
    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            arr.push(i)
        }
    }
    return arr;
};
