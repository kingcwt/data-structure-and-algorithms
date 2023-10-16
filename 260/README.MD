### **[260. 只出现一次的数字 III](https://leetcode.cn/problems/single-number-iii/description/?envType=daily-question&envId=2023-10-16)**

`难度：中等`

给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。

#### 示例

```js
输入：nums = [1,2,1,3,2,5]
输出：[3,5]
解释：[5, 3] 也是有效的答案。
```


```typescript
function singleNumber(nums: number[]): number[] {

  const map = new Map()
  for(let i=0;i<nums.length;i++){
     let item = nums[i]
     if(map.get(item)){
       map.delete(item)
     }else{
          map.set(item,true)
     }
     
  }
 return Array.from(map.keys())
};
```