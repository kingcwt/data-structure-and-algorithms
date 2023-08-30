package main

import "fmt"

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
func trap(height []int) int {
	// 定义左右指针
	l, r := 0, len(height)-1
	// 定义左右指针两边的最大值: lMax = height[0,l]; rMax = height[r,...]
	lMax, rMax := height[l], height[r]
	res := 0
	// 左右指针每次只有一个移动，表示那个位置的已经求出来了
	for l < r {
		// 只需要知道较小的就行，一旦满足这个条件，不需要关注另一边的情况，因为从全局来看这部分一定会被“接”到
		if lMax < rMax {
			res += lMax - height[l]
			l++                         // 当前左指针所指的位置已经计算了，右移
			lMax = max(lMax, height[l]) // 放在这里是避免求另一个的时候重复无意义比较
		} else {
			res += rMax - height[r]
			r--                         // 当前右指针所指的位置已经计算了，左移
			rMax = max(rMax, height[r]) //同样，放在这里是避免求另一个的时候重复无意义比较
		}
	}
	return res
}

func main() {

	res := trap([]int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1})
	fmt.Println(res)
}
