package main

import "fmt"

func sumOfMultiples(n int) int {
	str := 0
	for i := 1; i <= n; i++ {
		if i%3 == 0 || i%5 == 0 || i%7 == 0 {
			str += i
		}
	}
	return str
}

func main() {
	res := sumOfMultiples(15)
	fmt.Print(res)
}
