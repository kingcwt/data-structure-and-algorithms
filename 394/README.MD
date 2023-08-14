### **[394. 字符串解码](https://leetcode.cn/problems/decode-string/)**
`难度：中等`

给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: `k[encoded_string]`，表示其中方括号内部的 `encoded_string` 正好重复 `k` 次。注意 `k` 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 `k` ，例如不会出现像 `3a` 或 `2[4]` 的输入。

**示例 1：**

```go
输入：s = "3[a]2[bc]"
输出："aaabcbc"
```

**示例 2：**

```go
输入：s = "3[a2[c]]"
输出："accaccacc"
```

- javascript

```go
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [],strStack =[],str = '',num = 0;
    for (let i=0;i<s.length;i++){
        const item = s[i];
        if(!isNaN(item)){
            num =num *10 + parseInt(item)
        }else if(item ==='['){
            strStack.push(str)
            str = ''
            numStack.push(num)
            num = 0
        }else if(item === ']'){
            const endNum = numStack.pop()
            const endStr = strStack.pop()
            str = endStr + str.repeat(endNum)
        }else {
            str += item
        }
    }
    return str
};
```

- golang

```go
func decodeString(s string) string {
    numStack := []int{}
    strStack := []string{}
    num := 0
    str := ""
    for i:=0;i<len(s);i++{
        item := s[i]
        if numValue,error := strconv.Atoi(string(item)); error == nil {
            num = num * 10 + numValue
        } else if string(item) == "[" {
            strStack = append(strStack,str)
            str = ""
            numStack = append(numStack,num)
            num = 0
        } else if string(item) == "]" {
            numIndex := len(numStack) - 1
            strIndex := len(strStack) - 1
            currentNum := numStack[numIndex]
            currentStr := strStack[strIndex]
            numStack = append(numStack[:numIndex],numStack[numIndex+1:]...)
            strStack = append(strStack[:strIndex],strStack[strIndex+1:]...)
            str = currentStr + strings.Repeat(str,currentNum)
        } else {
            str += string(item)
        }
    }
    return str
}
```