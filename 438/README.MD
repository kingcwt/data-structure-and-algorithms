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

- JavaScript [注释]
```js
// ps: 首先，我们的目标是找到字符串 s 中所有的子串，这些子串是字符串 p 的异位词。一个异位词意味着子串中的字母和 p 中的字母完全相同，只是排列顺序不同。

var findAnagrams = function(s, p) {
    const sLen = s.length, pLen = p.length;
    
    // ps: 当这个s字符串的长度比p字符串长度还小 那就直接返回空 没啥可比的了
    if (sLen < pLen) {
        return [];
    }

    const ans = [];
    // ps: 这里新建两个数组 来存储两个字符串中每个字母出现的次数 sCount存储s字符串中每个字母出现的次数 pCount存储p字符串中每个字母出现的次数
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    // ps: 这里默认比较p字符串的长度 和 s字符串的长度 是否相等 比如 s='baba',p='ba'; sCount b和a 都出现一次 pCount b和a也都只出现一次 说明起始位置0是满足条件的 就可以push进ans数组了
    for (let i = 0; i < pLen; ++i) {
        ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
        ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
    }

    if (sCount.toString() === pCount.toString()) {
        ans.push(0);
    }

    // ps: 这里使用的是滑动窗口
    for (let i = 0; i < sLen - pLen; ++i) {
        // ps: 下面这行代码 为啥-- 是在上面初始化的基础上 从0项开始往右滑动 
        // ps: 你想上面的初始化 已经确认从0开始到pLen项是不是满足条件 所以这里就要先减去第一个字符 最右边在加一个字符 当前的i+1 ~ i+pLen 子串 是不是满足条件 满足就把起始索引放到数组中 这也是为啥要i+1
        --sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
        ++sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

        if (sCount.toString() === pCount.toString()) {
            ans.push(i + 1);
        }
    }

    return ans;
};

let s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s,p))
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



- 解释
```
出发点与目的
首先，我们的目标是找到字符串 s 中所有的子串，这些子串是字符串 p 的异位词。一个异位词意味着子串中的字母和 p 中的字母完全相同，只是排列顺序不同。

为了高效地完成这个任务，我们使用了“滑动窗口”技术。这个技术的核心思想是维护一个固定长度（等于 p 的长度）的窗口，并在 s 上从左到右滑动这个窗口，每次滑动一位字符。对于窗口中的每个子串，我们检查它是否是 p 的一个异位词。

如何检查异位词
要检查两个字符串是否为异位词，一种方法是比较它们各自字母的出现次数。如果两个字符串的每个字母出现次数都相同，则它们互为异位词。

因此，我们使用两个计数器数组 sCount 和 pCount 来分别记录窗口中子串和字符串 p 中每个字母的出现次数。数组的每个索引对应一个字母（例如，索引 0 对应 'a'，索引 1 对应 'b'，依此类推）。

代码逻辑
初始化计数器：在开始滑动之前，我们首先填充 pCount 来记录 p 中每个字母的出现次数，并且也为 s 的第一个窗口填充 sCount。

滑动窗口：接下来，我们开始滑动窗口。对于每次滑动：

移除窗口左侧字符：当窗口向右移动时，最左边的字符会离开窗口。因此，我们需要减少该字符在 sCount 中的计数（--sCount[s[i].charCodeAt() - 'a'.charCodeAt()]）。这表示我们不再考虑这个字符，因为它不在新窗口中了。

添加窗口右侧新字符：同时，新的字符会从右侧进入窗口。因此，我们增加该字符在 sCount 中的计数（++sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]）。这表示我们开始考虑这个新字符，因为它现在在窗口中了。

通过这种方式，我们保持 sCount 始终反映当前窗口中各字母的出现次数。

比较计数器：每次滑动后，我们比较 sCount 和 pCount。如果它们相同，说明当前窗口中的子串是 p 的一个异位词，我们就记录下这个子串的起始位置。
如何想到这么做
这种方法之所以被想到和使用，是因为它提供了一种非常高效地检查字符串中所有可能子串是否为另一个字符串异位词的方式。通过仅关注进入和离开窗口的字符，我们避免了对每个新窗口重新计算整个字母频率的需要，大大减少了计算量。
```