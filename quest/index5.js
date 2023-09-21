var checkValidString = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    for (let i = 0; i < n; i++) {
        if (s[i] === '*') {
            dp[i][i] = true;
        }
    }
    console.log(dp)
    return;
    for (let i = 1; i < n; i++) {
        const c1 = s[i - 1], c2 = s[i];
        dp[i - 1][i] = (c1 === '(' || c1 === '*') && (c2 === ')' || c2 === '*');
    }
    for (let i = n - 3; i >= 0; i--) {
        const c1 = s[i];
        for (let j = i + 2; j < n; j++) {
            const c2 = s[j];
            if ((c1 === '(' || c1 === '*') && (c2 === ')' || c2 === '*')) {
                dp[i][j] = dp[i + 1][j - 1];
            }
            for (let k = i; k < j && !dp[i][j]; k++) {
                dp[i][j] = dp[i][k] && dp[k + 1][j];
            }
        }
    }
    return dp[0][n - 1];
};
let s= "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
let s1="((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((";
let s2='(*))'
console.log(checkValidString(s2))