/**
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
  // 1 如果nums为空,返回0
    if (nums.length === 0) {
      return 0;
    }
  // 2 把数据放入set中
    let numSet = new Set(nums);
  // 3 设置一个初始的最长连续序列为0
    let longestStreak = 0;
  
    for (let num of numSet) {
      // 3 如果num-1不在set中,那么就是一个新的连续序列 也就是当前值为起点  这里把每一个元素作为起点
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;
  
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentStreak += 1;
        }
  
        longestStreak = Math.max(longestStreak, currentStreak);
      }
    }
  
    return longestStreak;
  }
  
  const nums = [100, 3, 200, 1, 4, 2];
  const result = longestConsecutive(nums);
  console.log("最长连续序列的长度为:", result);
  