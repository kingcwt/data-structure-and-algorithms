// const selectionSort = (nums) =>{
//     for (let i = 0; i< nums.length - 1; i++){
//         let minIndex = i;
//         for (let j = i+1; j <nums.length; j ++) {
//             if(nums[j] < nums[minIndex]){
//                 minIndex = j
//             }
//         }
//         let temp = nums[i]
//         nums[i] = nums[minIndex]
//         nums[minIndex] = temp
//     }
//     return nums
// }

let selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp
  }
  return arr
}

console.log(
  selectionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 46, 19, 50, 48]),
  "11"
);
