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
