package main

import "fmt"

func moveZeroes(nums []int) []int {
	i := 0
	j := 0
	for i < len(nums) {
		j = i
		if nums[i] == 0 {
			i++
		} else {
			k := i
			for j > 0 {
				pre := nums[j-1]
				if pre == 0 {
					nums[j-1] = nums[k]
					nums[k] = pre
				} else {
					j = 0
				}
				j--
				k--
			}
			i++
		}
	}
	return nums
}
func main() {
	val := moveZeroes([]int{0, 1, 0, 3, 12})
	fmt.Print(val)
}
