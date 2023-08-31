### **[438. 找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)**

`难度：中等`

给定两个字符串`s`和`p`，找到`s`中所有`p`的异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

**异位词** 指由相同字母重排列形成的字符串（包括相同的字符串）。

- **示例 1**

```go
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
```

- 示例2

```go
输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
```

- TypeScript

```go
function findAnagrams(s: string, p: string): number[] {
    let sLen = s.length,pLen = p.length;
    let ans = [];

    if (sLen < pLen){
        return []
    }
    let sCount = new Array(26).fill(0)
    let pCount = new Array(26).fill(0)

    for (let i = 0; i < pLen; ++i){
        ++sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]
        ++pCount[p[i].charCodeAt(0) - "a".charCodeAt(0)]
    }
    if(sCount.toString() === pCount.toString()){
        ans.push(0)
    }
    for (let i = 0; i< sLen - pLen; ++i){
        --sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]
        ++sCount[s[(i + pLen)].charCodeAt(0) - "a".charCodeAt(0)]
        if(sCount.toString() === pCount.toString()){
            ans.push(i + 1)
        }
    }

    return ans
};
```

- Go

```go
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
```

