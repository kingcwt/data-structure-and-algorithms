# data-structure-and-algorithms

### 爬楼梯

- **[70. Climbing Stairs](https://leetcode.cn/problems/climbing-stairs/)**

假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

| n步数到顶层 | 先走一步 | 先走两步 | 共多少种 | 总结 |
| --- | --- | --- | --- | --- |
| 1 | 1 | 0 | 1 | if f(1) return 1 |
| 2 | 1+1 | 2 | 2 | if f(2) return 2 |
| 3 | 1+1+1，1+2 | 2+1 | 3 | f3=f(3-1)+f(3-2)=3 |
| 4 | 1+1+1+1，1+1+2，1+2+1 | 2+1+1，2+2 | 5 | f4=f(4-1)+f(4-2)=5 |
| 5 | 1+1+1+1+1，1+1+1+2，1+1+2+1，1+2+1+1 | 2+1+1+1，2+2+1，2+1+2，1+2+2 | 8 | f5=f(5-1)+f(5-2) = 8 |
| n | f(n-1) | f(n-2) | n | fn=f(n-1)+f(n-2) |

*推导：* `第n步 就等于f(n-1)+f(n-2) ⇒ 假设n=5 ⇒ f(5-1)+f(5-2) ⇒f(4)+f(3) ⇒步数为4层的有5种办法+步数为3层的有3种办法 ⇒ 5+3 ⇒ 8 ⇒ 如果5步可以到达顶层有8种不同的方法`

<img src='./algorithm1.png' height={650} />

#### 递归

- js

```jsx
/**
 * 递归
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(5));
```

如果数值过大，递归会消耗大量的时间，会有超时问题

#### 递归+map

- js

```jsx
/**
 * 递归+map
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const map = new Map();
    const func = (n) =>{
        if (n === 1) return 1;
        if (n === 2) return 2;
        if(map.get(n)){
            return map.get(n)
        }else{
            const result = func(n-1)+func(n-2)
            map.set(n,result)
            return result
        }
    }
    return func(n)
  };
```

- go

```go
func climbStairs(n int) int {
     m := map[int]int{}

     var sum func(n int) int
     sum = func (n int) int{
         if n ==1 {
             return 1
         }
         if n ==2 {
             return 2
         }
         if val,ok := m[n]; ok{
             return val
         }else{
             result := sum(n-1)+sum(n-2)
             m[n] = result
             return result
         }
     }
     return sum(n)
}
```

#### 循环

- js

```jsx
/**
 * 循环
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let result = 0;
  let n1 = 1;
  let n2 = 2;

  for (let i = 3; i <= n; i++) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
  }
  return result;
};
console.log(climbStairs(5));
```

- go

```go
func climbStairs(n int) int {
    if n==1 {
        return 1
    }
    if n==2 {
        return 2
    }
    result := 0
    n1 :=1
    n2 :=2
    for i :=3; i<=n;i++ {
        result = n1+n2
        n1 = n2
        n2 = result
    }
    return result
}
```


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

### **[88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)**

给你两个按 **非递减顺序** 排列的整数数组 `nums1` 和 `nums2`，另有两个整数 `m` 和 `n` ，分别表示 `nums1` 和 `nums2` 中的元素数目。

请你 **合并** `nums2` w到 `nums1` 中，使合并后的数组同样按 **非递减顺序** 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 `nums1` 中。为了应对这种情况，`nums1` 的初始长度为 `m + n`，其中前 `m` 个元素表示应合并的元素，后 `n` 个元素为 `0` ，应忽略。`nums2` 的长度为 `n` 。

- 示例1

```jsx
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
```

- js

```jsx
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k] = nums1[i]
            i--;
        }else{
            nums1[k] = nums2[j]
            j--;
        }
        k--;
    }
    while(j>=0){
        nums1[k] = nums2[j]
        j--;
        k--;
    }

   return nums1
};
```

- go

```go
func merge(nums1 []int, m int, nums2 []int, n int)  {
    i := m-1;
    j := n-1;
    k := m+n-1;
    for i>=0&&j>=0 {
        if nums1[i] > nums2[j] {
            nums1[k] = nums1[i]
            i--;
        }else{
            nums1[k] = nums2[j]
            j--
        }
        k--;
    }

    for j>=0{
        nums1[k] = nums2[j]
        j--
        k--
    }
}
```

### **[283. 移动零](https://leetcode.cn/problems/move-zeroes/)**

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意** ，必须在不复制数组的情况下原地对数组进行操作。

- 示例

```go
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

- js

```jsx
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0; 
    let j = 0;
    while(i< nums.length){
        j=i;
        if(nums[i] === 0){
              i++;
        }else{
            let k = i;
            while(j>0){
               let pre = nums[j-1]
               if(pre ===0){
                   nums[j-1] = nums[k]
                   nums[k] = pre
               }else{
                   j =0;
               }
               j--
               k--
            }
            i++;
        }
    }
    return nums
};
```

- go

```go
func moveZeroes(nums []int)  {
    i :=0;
    j :=0;
    for i<len(nums){
        j = i;
        if nums[i] ==0 {
            i++
        }else{
            k := i;
            for j>0{
                pre := nums[j-1]
                if pre == 0 {
                    nums[j-1] = nums[k]
                    nums[k] = pre
                }else{
                    j=0
                }
                j--
                k--
            }
            i++
        }
    }
}
```