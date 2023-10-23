/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let num  = 0;
    details.forEach((item)=>{
       const curStr = item.slice(item.length-4,item.length-4+2)
       if(curStr > 60){
           num++
       }
    })

    return num
};



const details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
const details1 = ["1313579440F2036","2921522980M5644"]
console.log(countSeniors(details1))