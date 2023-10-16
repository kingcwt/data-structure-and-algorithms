package main

import "fmt"

func singleNumber(nums []int) []int {
	m := map[int]bool{}

	for i := 0; i < len(nums); i++ {
		item := nums[i]
		if m[item] {
			delete(m, item)
		} else {
			m[item] = true
		}
	}

	res := []int{}
	for k := range m {
		res = append(res, k)
	}

	return res
}

func main() {
	res := singleNumber([]int{4, 1, 2, 1, 2})
	fmt.Println(res)
}
