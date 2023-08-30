/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const n = nums.length;
    const arr = nums.sort((a,b)=>a-b)
    const result = []

    for (let i=0;i<n-2;i++){
        if(i>0&&arr[i] === arr[i - 1]){
            continue
        }

        let left = i+1;
        let right = n-1;
        while (left < right) {
            const sum = arr[i]+arr[left]+arr[right]
            if(sum === 0){
                result.push([arr[i],arr[left],arr[right]])
                left++
                right--

                while(left < right && arr[left] === arr[left - 1]){
                    left++
                }
                while(left < right && arr[right] === arr[right + 1]){
                    right--
                }
            }else if(sum <0){
                left++
            }else{
                right--
            }
        }
    }
    return result
};