### **[2525. 根据规则将箱子分类](https://leetcode.cn/problems/categorize-box-according-to-criteria/description/?envType=daily-question&envId=2023-10-20)**

给你四个整数 length ，width ，height 和 mass，分别表示一个箱子的三个维度和质量，请你返回一个表示箱子类别的字符串。  
如果满足以下条件 那么箱子是"Bulky"的：
箱子至少有一个维度大于等于$10^2$。或者箱子的体积大于等于$10^9$。  
如果箱子的质量大于等于100，那么箱子是"Heavy"的。  
如果箱子同时是"Bulky"和"Heavy"，那么返回类别为"Both"。  
如果箱子既不是"Bulky"，也不是"Heavy"，那么返回类别为"Neither"。  
如果箱子是"Bulky"但不是"Heavy"，那么返回类别为"Bulky"。  
如果箱子是"Heavy"但不是"Bulky"，那么返回类别为"Heavy"。  
注意，箱子的体积等于箱子的长度、宽度和高度的乘积。  


#### 示例
```
输入：length = 1000, width = 35, height = 700, mass = 300
输出："Heavy"
解释：
箱子没有任何维度大于等于 104 。
体积为 24500000 <= 109 。所以不能归类为 "Bulky" 。
但是质量 >= 100 ，所以箱子是 "Heavy" 的。
由于箱子不是 "Bulky" 但是是 "Heavy" ，所以我们返回 "Heavy" 。
```

- JavaScript  
```js
/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */

var categorizeBox = function (length, width, height, mass) {
    const pow4 = Math.pow(10, 4)
    const pow9 = Math.pow(10, 9)
    const l = length, w = width, h = height, m = mass;

    const res = []
    if (l >= pow4 || w >= pow4 || h >= pow4 || m >= pow4 || (l * w * h) >= pow9) {
        res.push('Bulky')
    }
    if (m >= 100) {
        res.push('Heavy')
    }
    if (res.length === 2) {
        return 'Both'
    }
    if (res.length === 0) {
        return 'Neither'
    }
    if (res.length === 1) {
        return res[0]
    }


};

let l = 1000, w = 1000, h = 1000, m = 1000
console.log(categorizeBox(2909, 3968, 3272, 727))
```