### 选择排序【selectionSort】

`特点`：

- 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
- 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
- 重复以上步骤，直到所有元素均排序完毕。

<img src="./selectionSort.gif" height={650} style="margin:24px" />
大白话总结

在未排序的数组里面，找到最小的元素，第一次默认把第一个作为最小的元素的索引存下来，一轮下来之后把数组中最小的那个元素的索引找到，然后在当前这一轮结束后，和当前这一轮的索引的值和找到的最小值进行交换位置，以此重复 n-1 轮后，最终排序完成，具体实现看下面代码

**JavaScript 代码**

```jsx
const selectionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    let temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }
  return nums;
};

console.log(selectionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 46, 19, 50, 48]));
```

**Go 代码**

```jsx
package main

import "fmt"

func selectionSort(nums []int) []int {

	for i := 0; i < len(nums)-1; i++ {
		minIndex := i
		for j := i + 1; j < len(nums); j++ {
			if nums[j] < nums[minIndex] {
				minIndex = j
			}
		}
		temp := nums[i]
		nums[i] = nums[minIndex]
		nums[minIndex] = temp
	}

	return nums
}

func main() {
	res := selectionSort([]int{3, 44, 38, 5, 47, 15, 36, 26, 27, 46, 19, 50, 48})
	fmt.Printf("%d\n", res)
}
```
