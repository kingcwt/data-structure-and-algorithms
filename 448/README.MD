### **[448. 找到所有数组中消失的数字](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/)**

给你一个含 `n` 个整数的数组 `nums` ，其中 `nums[i]` 在区间 `[1, n]` 内。请你找出所有在 `[1, n]` 范围内但没有出现在 `nums` 中的数字，并以数组的形式返回结果。

- 示例

```jsx
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
```

- js

```jsx
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = [];
    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            arr.push(i)
        }
    }
    return arr;
};
```

- go

```jsx
func findDisappearedNumbers(nums []int) []int {
    arr :=[]int{}
    m := make(map[int]bool)
    for _,v := range nums {
        m[v] = true
    }

    for i:=1;i<=len(nums);i++{
        if m[i]!= true {
            arr = append(arr,i)
        }
    }
    return arr
}
```
