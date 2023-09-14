// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let preIndex = i - 1;
//     let current = arr[i];
//     while (preIndex >= 0 && arr[preIndex] > current) {
//       arr[preIndex + 1] = arr[preIndex];
//       preIndex--;
//     }
//     arr[preIndex + 1] = current;
//   }
//   return arr
// };

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    let current = arr[i];

    while (preIndex >= 0 && current < arr[preIndex]) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
};

console.log(
  insertionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 46, 19, 50, 48]),
  "11"
);
