package main

import "fmt"

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return b
	}
	return b
}

func maxArea(height []int) int {
	l := 0
	r := len(height) - 1
	ans := 0

	for l < r {
		area := min(height[l], height[r]) * (r - l)
		ans = max(ans, area)
		fmt.Printf("l = %d, r = %d, area = %d\n", l, r, area)
		if height[l] <= height[r] {
			l++
		} else {
			r--
		}
	}
	return ans
}

func main() {
	res := maxArea([]int{1, 8, 6, 2, 5, 4, 8, 3, 7})
	fmt.Printf("result = %d\n", res)
}
