/**
 * 
 * 输入：s = "3[a]2[bc]"
   输出："aaabcbc"
   输入：s = "3[a2[c]]"
   输出："accaccacc"
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let numStack = []; // 倍数 num 的等待栈
  let strStack = []; // 待拼接 str 的等待栈

  let num = 0,
    result = "";

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (!isNaN(item)) {
      // 判断是数字时
      num = num * 10 + parseInt(item);
    } else if (item === "[") {
      strStack.push(result);
      result = "";
      numStack.push(num);
      num = 0;
    } else if (item === "]") {
      const repeatTimes = numStack.pop(); // 从栈中获取次数
      result = strStack.pop() + result.repeat(repeatTimes);
    } else {
      result += item;
    }
  }
  return result;
};

const s1 = "3[a2[c]]";
const s2=
"100[leetcode]"
// const s = "3[a]2[bc]"
const decodedStr = decodeString(s2);
console.log(decodedStr,'222222');

const curCodeStr = (s) => {
  let numStack = [],
    strStack = [],
    str = "",
    num = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (!isNaN(item)) {
      num = num * 10 + parseInt(item);
    } else if (item === "[") {
      strStack.push(str);
      str = "";
      numStack.push(num);
      num = 0;
    } else if (item === "]") {
      let endNum = numStack.pop();
      let endStr = strStack.pop();
      str = endStr + str.repeat(endNum);
    } else {
      str += item;
    }
  }

  return str;
};

console.log(curCodeStr(s2), "gggg");
