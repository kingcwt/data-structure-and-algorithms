package main

import "fmt"

func insertionSort(arr []int) []int {

	for i := 1; i < len(arr); i++ {
		preIndex := i - 1
		current := arr[i]

		for preIndex >= 0 && arr[preIndex] > current {
			arr[preIndex+1] = arr[preIndex]
			preIndex--
		}
		arr[preIndex+1] = current
	}

	return arr
}

func main() {

	res := insertionSort([]int{4, 2, 1, 3})
	fmt.Printf("%d\n", res)
}
