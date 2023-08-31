package main

import "fmt"

func findAnagrams(s string, p string) []int {
	sLen, pLen := len(s), len(p)
	ans := []int{}
	if sLen < pLen {
		return []int{}
	}

	var sCount, pCount [26]int
	for i := 0; i < pLen; i++ {
		sCount[s[i]-'a']++
		pCount[p[i]-'a']++
	}
	if sCount == pCount {
		ans = append(ans, 0)
	}
	for i := 0; i < sLen-pLen; i++ {
		sCount[s[i]-'a']--
		sCount[s[i+pLen]-'a']++
		if sCount == pCount {
			ans = append(ans, i+1)
		}
	}
	return ans
}

func main() {

	res := findAnagrams("cbaebabacd", "abc")
	fmt.Printf("result = %v\n", res)
}
