

// const shellSort = arr => {
//     let len = arr.length

//     let gap = Math.floor(len / 2)

//     while (gap >= 1) {
//         for (let i = gap; i < len; i++) {
//             let item = arr[i]
//             let j = i
//             while (arr[j - gap] > item && j > gap - 1) {
//                 arr[j] = arr[j - gap]
//                 j -= gap
//             }
//             arr[j] = item
//         }
//         gap = Math.floor(gap / 2)
//     }
//     return arr
// }

const shellSort = arr => {
    let len = arr.length;
    let gap = Math.floor(len / 2);

    while (gap >= 0) {
        for (let i = gap; i < len; i++) {
            let item = arr[i];
            let j = i;
            while (item < arr[j - gap] && j > gap - 1) {
                arr[j] = arr[j - gap];
                j -= gap
            }
            arr[j] = item
        }
        gap = Math.floor(gap / 2)
    }
}

let arr = [81, 94, 11, 96, 12, 35, 17, 95, 28, 58, 41, 75, 15]
console.log(shellSort(arr))  