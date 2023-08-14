package main

import (
	"fmt"
	"strconv"
	"strings"
)

func decodeString(s string) string {
	numStack := []int{}
	strStack := []string{}
	str := ""
	num := 0
	for i := 0; i < len(s); i++ {
		item := s[i]
		if numValue, error := strconv.Atoi(string(item)); error == nil {
			num = num*10 + numValue
		} else if string(item) == "[" {
			strStack = append(strStack, string(str))
			str = ""
			numStack = append(numStack, num)
			num = 0
		} else if string(item) == "]" {
			numIndex := len(numStack) - 1
			currentNum := numStack[numIndex]
			numStack = append(numStack[:numIndex], numStack[numIndex+1:]...)
			strIndex := len(strStack) - 1
			currentStr := strStack[strIndex]
			strStack = append(strStack[:strIndex], strStack[strIndex+1:]...)
			str = currentStr + strings.Repeat(str, currentNum)
		} else {
			str += string(item)
		}
	}
	return str
}

func main() {
	s := "3[a2[c]]"
	res := decodeString(s)
	fmt.Println(res)
}
