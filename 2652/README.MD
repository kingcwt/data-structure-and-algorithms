### **[2652. 倍数求和](hhttps://leetcode.cn/problems/sum-multiples/description/?envType=daily-question&envId=2023-10-17)**

> 每日一题 【Yes】

`难度：简单`

给你一个正整数 n ，请你计算在 [1，n] 范围内能被 3、5、7 整除的所有整数之和。

返回一个整数，用于表示给定范围内所有满足约束条件的数字之和。

#### 示例

```js
输入：n = 7
输出：21
解释：在 [1, 7] 范围内能被 3、5、7 整除的所有整数分别是 3、5、6、7 。数字之和为 21 。
```

- TypeScript

```typescript
function sumOfMultiples(n: number): number {
    let str = 0
    for (let i = 3; i <= n; i++){
        if(i % 3 === 0|| i % 5 === 0 || i % 7 === 0){
            str+=i
        }
    }

    return str
};
```
- Go

```go
func sumOfMultiples(n int) int {
    str := 0
    for i := 1; i <= n; i++ {
        if i % 3 == 0 ||  i % 5 == 0 || i % 7 == 0  {
            str += i
        }
    }
    return str
}
```