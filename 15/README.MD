### **[15. 三数之和](https://leetcode.cn/problems/3sum/)**

给你一个整数数组 `nums` ，判断是否存在三元组 `[nums[i], nums[j], nums[k]]` 满足 `i != j`、`i != k` 且 `j != k` ，同时还满足 `nums[i] + nums[j] + nums[k] == 0` 。请

你返回所有和为 `0` 且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

- 示例1

```go
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
```

- 示例2

```go
输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
```

- TypeScript

```go
function threeSum(nums: number[]): number[][] {
    
     const n = nums.length
     const arr = nums.sort((a,b)=>a - b)
     const result = []
     for (let i=0;i<n-2;i++){
         if(i>0&&arr[i] == arr[i-1]){
             continue
         }

         let left = i+1;
         let right = n-1;

         while (left < right) {
             const sum = arr[i]+arr[left]+arr[right];
             if (sum === 0){
                 result.push([arr[i],arr[left],arr[right]])
                 left++
                 right--

                 while(left < right && arr[left] === arr[left-1]){
                     left++
                 }
                 while (left < right && arr[right] === arr[right+1]){
                     right--
                 }
             }else if (sum < 0){
                 left++
             }else{
                 right--
             }
         }
     }
     return result
};
```

- Go

```go
func threeSum(nums []int) [][]int {
 n := len(nums)
	sort.Ints(nums)
	result := [][]int{}
	for i := 0; i < n-2; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		left, right := i+1, n-1
		for left < right {
			sum := nums[i] + nums[left] + nums[right]
			if sum == 0 {
				result = append(result, []int{nums[i], nums[left], nums[right]})
				left++
				right--

				for left < right && nums[left] == nums[left-1] {
					left++
				}
				for left < right && nums[right] == nums[right+1] {
					right--
				}
			} else if sum < 0 {
				left++
			} else {
				right--
			}
		}
	}

	return result
}
```