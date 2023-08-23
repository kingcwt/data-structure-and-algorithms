### **[49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/)**

`难度：中等`  

### 思路：
1 对字符串的每一个字符进行排序  
2 把排序后的字符相等的归位一类，放在一个数组中  

给你一个字符串数组，请你将 **字母异位词** 组合在一起。可以按任意顺序返回结果列表。

**字母异位词** 是由重新排列源单词的所有字母得到的一个新单词。

- 示例1

```tsx
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

- typescript

```tsx
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map()
    for (let str of strs) {
        const key = Array.from(str).sort().toString()
        const list = map.get(key)?map.get(key):new Array()
        list.push(str)
        map.set(key,list)
    }
    return Array.from(map.values())
};
```

- golang

```tsx
func groupAnagrams(strs []string) [][]string {
     m := map[string][]string{}   

     for _,str := range strs {
         s := []byte(str)
        sort.Slice(s, func(i, j int) bool { return s[i] < s[j] })

         sortKey := string(s)
         m[sortKey] = append(m[sortKey],str)
     }   

     arr := make([][]string,0,len(m))
     for _,v := range m {
         arr = append(arr,v)
     }
     return arr
}
```