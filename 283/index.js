/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0; 
    let j = 0;
    while(i< nums.length){
        j=i;
        if(nums[i] === 0){
              i++;
        }else{
            let k = i;
            while(j>0){
               let pre = nums[j-1]
               if(pre ===0){
                   nums[j-1] = nums[k]
                   nums[k] = pre
               }else{
                   j =0;
               }
               j--
               k--
            }
            i++;
        }
    }
    return nums
};