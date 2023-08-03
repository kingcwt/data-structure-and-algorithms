package main

import "fmt"

func findDisappearedNumbers(nums []int) []int {

	arr := []int{}
	m := make(map[int]bool)
	for _, v := range nums {
		m[v] = true
	}

	for i := 1; i <= len(nums); i++ {
		if m[i] != true {
			arr = append(arr, i)
		}
	}

	return arr
}

func main() {
	val := findDisappearedNumbers([]int{4, 3, 2, 7, 8, 2, 3, 1})
	fmt.Println(val)
}
