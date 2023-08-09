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