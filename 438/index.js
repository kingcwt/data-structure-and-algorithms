

// # 滑动窗口

// ps: 首先，我们的目标是找到字符串 s 中所有的子串，这些子串是字符串 p 的异位词。一个异位词意味着子串中的字母和 p 中的字母完全相同，只是排列顺序不同。

var findAnagrams = function(s, p) {
    const sLen = s.length, pLen = p.length;
    
    // ps: 当这个s字符串的长度比p字符串长度还小 那就直接返回空 没啥可比的了
    if (sLen < pLen) {
        return [];
    }

    const ans = [];
    // ps: 这里新建两个数组 来存储两个字符串中每个字母出现的次数 sCount存储s字符串中每个字母出现的次数 pCount存储p字符串中每个字母出现的次数
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    // ps: 这里默认比较p字符串的长度 和 s字符串的长度 是否相等 比如 s='baba',p='ba'; sCount b和a 都出现一次 pCount b和a也都只出现一次 说明起始位置0是满足条件的 就可以push进ans数组了
    for (let i = 0; i < pLen; ++i) {
        ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
        ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
    }

    if (sCount.toString() === pCount.toString()) {
        ans.push(0);
    }

    // ps: 这里使用的是滑动窗口
    for (let i = 0; i < sLen - pLen; ++i) {
        // ps: 下面这行代码 为啥-- 是在上面初始化的基础上 从0项开始往右滑动 
        // ps: 你想上面的初始化 已经确认从0开始到pLen项是不是满足条件 所以这里就要先减去第一个字符 最右边在加一个字符 当前的i+1 ~ i+pLen 子串 是不是满足条件 满足就把起始索引放到数组中 这也是为啥要i+1
        --sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
        ++sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

        if (sCount.toString() === pCount.toString()) {
            ans.push(i + 1);
        }
    }

    return ans;
};

let s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s,p))