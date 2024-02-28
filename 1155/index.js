var numRollsToTarget = function(d, f, target) {
  const MOD = 1e9 + 7;
  const dp = new Array(d + 1).fill(0).map(() => new Array(target + 1).fill(0));
  
  // 初始化初始条件和边界情况
  for (let i = 1; i <= Math.min(f, target); i++) {
    dp[1][i] = 1;
  }

  // 动态规划推导
  for (let i = 2; i <= d; i++) {
    for (let j = 1; j <= target; j++) {
      for (let k = 1; k <= f && k <= j; k++) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % MOD;
      }
    }
  }
  
  return dp[d][target];
};

// 示例用法
const dices = 2; // 骰子个数
const faces = 6; // 骰子面数
const targetSum = 7; // 目标和
const methods = numRollsToTarget(dices, faces, targetSum);
console.log("方法数:", methods);