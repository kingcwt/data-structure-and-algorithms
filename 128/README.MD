### **[128. 最长连续序列](https://leetcode.cn/problems/longest-consecutive-sequence/)**

`难度：中等`

给定一个未排序的整数数组 `nums` ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 `O(n)` 的算法解决此问题。

#### 思路
1 如果nums长度为0 则返回0 
2 把nums放入set中  
3 遍历当前数组 如果当前值减一不存在 说明当前值为最长序列的起点 然后在判断 加一的值是否存在 如果存在就更新当前最长连续序列的长度  
4 遍及每一项 更新longestStreak最长连续序列 然后返回该值


```tsx
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

```tsx
function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0
    const numSet = new Set(nums)
    let longestStreak = 0
    for (let num of nums) {
        if(!numSet.has(num - 1)) {
            let currentNum = num
            let currentStreak = 1

            while(numSet.has(currentNum + 1)){
                currentNum += 1
                currentStreak += 1
            }
            longestStreak = Math.max(longestStreak,currentStreak)
        }
    }
    return longestStreak
};
```

```go
func max (a, b int) int {
    if a > b {
        return a
    }
    return b
}
func longestConsecutive(nums []int) int {
    if len(nums) == 0 {
        return 0
    }

    m := make(map[int]int)
    longestStreak := 0
    for _,n := range nums {
        m[n] = 1
    }

    for _,num := range nums {
        if _,ok := m[num - 1]; !ok {
            currentNum := num
            currentStreak := 1

            for m[currentNum + 1] != 0 {
                currentNum++
                currentStreak++
            }

        longestStreak = max(longestStreak, currentStreak)
        }
    }
    return longestStreak
}
```