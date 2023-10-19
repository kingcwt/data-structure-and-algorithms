### 1726. 同积元组

> 每日一题 【Yes】

`难度：中等`

给你一个由 不同 正整数组成的数组 nums ，请你返回满足 a * b = c * d 的元组 (a, b, c, d) 的数量。其中 a、b、c 和 d 都是 nums 中的元素，且 a != b != c != d 。

#### 示例：
```angular2html
输入：nums = [2,3,4,6]
输出：8
解释：存在 8 个满足题意的元组：
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
```

- JavaScript
```javascript
function tupleSameProduct(nums){
    const map = new Map()
    const len = nums.length;
    for(let i=0;i< len;i++){
        for(let j = i+1;j<len;j++){
            const key = nums[i] * nums[j]
            map.set(key, (map.get(key)||0)+1)
        }
    }

    let ans = 0;
    for(const v of map.values()){
        ans += v * (v - 1) * 4
    }

    return ans
}

```

- Go
```go
package main

import "fmt"

func tupleSameProduct(nums []int) int {
	n := len(nums)
	m := make(map[int]int)

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			m[nums[i]*nums[j]]++
		}
	}

	ans := 0
	for _, v := range m {
		ans += v * (v - 1) * 4
	}

	return ans

}

func main() {
	res := tupleSameProduct([]int{2, 3, 4, 6})
	fmt.Println(res)
}

```