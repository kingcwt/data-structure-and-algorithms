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