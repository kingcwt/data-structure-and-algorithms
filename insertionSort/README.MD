### **插入排序【insertionSort】**

`特点：`

- 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
- 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

<img src='./insertionSort.gif' height={650} style='margin:24px' />

大白话总结

> 在遍历时，定义一个初始已排序的索引，默认为第一项，然后把遍历的每一项这个值和前面已经排序的值进行比较，如果前面已经排序的值大于当前项的值，则让已经排序的这一项向后挪一位。直到比较不大于的时候放到已经排序的这个值的后面一位，重复往上步骤。具体代码如下：

**JavaScript 代码**

```jsx
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    let current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
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
```

**Go 代码**

```go
package main

import "fmt"

func insertionSort(arr []int) []int {

	for i := 1; i < len(arr); i++ {
		preIndex := i - 1
		current := arr[i]

		for preIndex >= 0 && arr[preIndex] > current {
			arr[preIndex+1] = arr[preIndex]
			preIndex--
		}
		arr[preIndex+1] = current
	}

	return arr
}

func main() {

	res := insertionSort([]int{4, 2, 1, 3})
	fmt.Printf("%d\n", res)
}
```
