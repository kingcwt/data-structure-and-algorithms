### **[42. 接雨水](https://leetcode.cn/problems/trapping-rain-water/)**

给定 `n` 个非负整数表示每个宽度为 `1` 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

<img src="./algorithm15.png" height={650} />

- 示例1

```go
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
```

- 示例2

```go
输入：height = [4,2,0,3,2,5]
输出：9
```

- TypeScript

```go
function trap(height: number[]): number {
    let l = 0, r = height.length - 1;
    let lMax = height[l],rMax = height[r];
    let ans = 0;

    while( l < r) {
        if(lMax < rMax) {
            ans += lMax - height[l]
            l++
            lMax = Math.max(lMax,height[l])
        }else {
            ans += rMax - height[r]
            r--
            rMax = Math.max(rMax,height[r])
        }
    }
    return ans
};
```

- Go

```go
func max (a, b int)int {
    if a > b {
        return a
    }
    return b
}

func trap(height []int) int {
    l,r := 0,len(height) - 1
    lMax,rMax := height[l],height[r]
    ans := 0

    for l < r {
        if lMax < rMax {
            ans += lMax - height[l]
            l++
            lMax = max(lMax,height[l])
        } else {
            ans += rMax - height[r]
            r--
            rMax = max(rMax,height[r])
        }
    }
    return ans
}
```