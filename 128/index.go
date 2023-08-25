package main

import "fmt"

func max(a, b int) int {
	if a > b {
		return a
	}
	return b

}

func longestConsecutive(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	numSet := make(map[int]int)
	longestStreak := 0
	fmt.Println(nums, nums[0], "-----")

	for _, n := range nums {
		numSet[n] = 1
	}

	for _, num := range nums {
		if _, ok := numSet[num-1]; !ok {
			currentNum := num
			currentStreak := 1
			for numSet[currentNum+1] != 0 {
				currentNum++
				currentStreak++
			}
			longestStreak = max(longestStreak, currentStreak)
		}
	}

	return longestStreak
}

func main() {
	res := longestConsecutive([]int{100, 4, 200, 1, 3, 2})
	fmt.Printf("result = %d\n", res)
}
