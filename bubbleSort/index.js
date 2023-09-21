// const bubbleSort = (nums) =>{
//     for (let i = 0; i < nums.length - 1; i++){
//         for (let j = 0;j < nums.length - 1 - i;j++){
//             if(nums[j] > nums[j+1]){
//                 let temp = nums[j]
//                 nums[j] = nums[j + 1]
//                 nums[j +1] = temp
//             }
//         }
//     }
//     return nums
// }

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
const res = bubbleSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]);
console.log(res);
