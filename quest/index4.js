/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    if(s.length === 1) return false
    if(s.length ==='') return true 
    let left = [];
    let right = [];
    let x = [];

    for(let i=0;i<s.length;i++){
        let item = s[i];
        if(item ==='('){
            left.push(item)
        }
        if(item ===')'){
            right.push(item)
        }
        if(item ==='*'){
            x.push(item)
        }
    }
    if(left.length === right.length){
        return true
    }
    if(left.length!==right.length&&x.length){
     const minLen = Math.abs(left.length - right.length)
     if(minLen === x.length||x.length>minLen){
    console.log(left,right,x,minLen)
         return true
     }
     return false
    }
    return false

};

let s= "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
let s1='"(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"'
console.log(checkValidString(s1))