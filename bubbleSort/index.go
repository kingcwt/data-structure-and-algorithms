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
