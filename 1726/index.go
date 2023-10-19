package main

import "fmt"

func tupleSameProduct(nums []int) int {
	n := len(nums)
	m := make(map[int]int)

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			m[nums[i]*nums[j]]++
		}
	}

	ans := 0
	for _, v := range m {
		ans += v * (v - 1) * 4
	}

	return ans

}

func main() {
	res := tupleSameProduct([]int{2, 3, 4, 6})
	fmt.Println(res)
}
