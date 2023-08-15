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