
const bubbleSort = (nums) =>{
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = 0;j < nums.length - 1 - i;j++){
            if(nums[j] > nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j +1] = temp
            }
        }
    }
    return nums
}


const res = bubbleSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70])
console.log(res)