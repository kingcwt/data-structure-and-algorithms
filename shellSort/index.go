package main

import "fmt"

func shellSort(arr []int) []int {
	leg := len(arr)
	gap := leg / 2

	for gap >= 1 {
		for i := gap; i < leg; i++ {
			item := arr[i]
			j := i

			for j > gap-1 && arr[j-gap] > item {
				arr[j] = arr[j-gap]
				j -= gap
			}
			arr[j] = item
		}
		gap = gap / 2
	}
	return arr
}
func main() {
	res := shellSort([]int{81, 94, 11, 96, 12, 35, 17, 95, 28, 58, 41, 75, 15})
	fmt.Println(res)
}
