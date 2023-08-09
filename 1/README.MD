### **[1. 两数之和](https://leetcode.cn/problems/two-sum/)**

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`*  的那 **两个** 整数，并返回它们的数组下标。v

- 示例

```go
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

求解

- js

```jsx
/**
 * 暴力求解
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
    }
};
console.log(twoSum([3,2,4],6));

/**
 * 使用map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let current = target - nums[i];
        if(map.has(current)){
            return [i,map.get(current)]
        }else{
            map.set(nums[i],i)
        }
    }
};
```

- go

```go
package main

import "fmt"

// 暴力求值
func twoSum(nums []int, target int) []int {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return []int{}
}

// map求值
func twoSum2(nums []int, target int) []int {
	m := map[int]int{}
	for i := 0; i < len(nums); i++ {
		r := target - nums[i]
		if val, ok := m[r]; ok {
			return []int{i, val}
		} else {
			m[nums[i]] = i
		}
	}
	return []int{}
}

func main() {
	fmt.Println(twoSum2([]int{2, 7, 11, 15}, 9))
}
```