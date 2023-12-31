### 冒泡排序【bubbleSort】

`特点`：

- 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
- 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
- 针对所有的元素重复以上的步骤，除了最后一个。
- 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

大白话总结

<aside>
💡 两个相邻元素进行比较，如果前者大于后者就进行交换，每一轮交换一遍后就可以确定最大的那个元素且放在数组最后的位置，如果有n个元素则进行n-1轮，就是每一轮进行后都减一，避免重复比较,具体实现看下面代码
</aside>

<img src='/bubbleSort.gif' height={650} style="margin-top:16px" />

**JavaScript代码**

```jsx
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
```

**Go代码**

```jsx
package main

import "fmt"

func bubbleSort(nums []int) []int {
	numsLen := len(nums)
	for i := 0; i < numsLen-1; i++ {
		for j := 0; j < numsLen-1-i; j++ {
			if nums[j] > nums[j+1] {
				temp := nums[j]
				nums[j] = nums[j+1]
				nums[j+1] = temp
			}
		}
	}

	return nums
}
func main() {
	res := bubbleSort([]int{22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70})
	fmt.Printf("%d/n", res)
}
```
