

const solution1 = arr =>{
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex<nums.length;fastIndex++){
      if(nums[fastIndex] !== 0){
          [nums[slowIndex],nums[fastIndex]] = [nums[fastIndex],nums[slowIndex]]
          slowIndex++
      }
  }
}

/** 括号匹配 */
const solution2 = parens =>{
  if(parens.length ===0) return true
  if(parens.length ===1) return false
  let obj = {
    ")":"("
  }
  let stack = [];
  for(let i=0;i<parens.length;i++){
    let item = parens[i];
     if(obj[item] ===undefined){
        if(item ==='('){
          stack.push(item)
        }
     }else{
      if(stack.pop()!==obj[item]){
        return false
      }
     }
  }
  return stack.length === 0 
}


// let s1='(',s2='hi())(',s3='',s4='32423(sgs(show)dg)'
// console.log(solution1(s4))


/** 强密码 */
const solution3 = password =>{
  if(password.length >=8 && password.length <=22){
    if(/[a-z]/.test(password)&&/[A-Z]/.test(password)&&/\d/.test(password)){

      for(let i=2;i<password.length;i++){
        if(password[i]=== password[i-1]&& password[i] === password[i-2]){
          return 'weak'
        }
      }

      return 'strong'
    }
  }

  return 'weak';
}

// let s1='1234567890Abcd',s2='1234567890aaaa',s3='1234567890abcd',s4='12345678',s5='abababababababababaaa',s6='1010101010aaB10101010'
// console.log(solution(s6))