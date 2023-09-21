

const solution = (password) => {
    if (password.length === 1) return false
    if (password.length === 0) return true

    if (password.length > 1) {
        let arrleft = [];
        let arrRight = [];
        for (let i = 0; i < password.length; i++) {
            let item = password[i];
            if (item === "(") {
                arrleft.push(item)
            }
            if (item === ")") {
                arrRight.push(item)
            }

            if (arrRight.length > arrleft.length) return false
        }

        return arrleft.length === arrRight.length ? true : false
    }
}



let str = ')';
let str1 = 'hi(code)(gg)';
let str2 = '';
let str3 = ')(()';

console.log(solution(str3))