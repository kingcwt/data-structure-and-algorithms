let str = '123456789Abcd';  // strong
let str1 = '123456789abcd'; // week
let str2 = '123456789aaaa'; // week


let solution = (password) => {
    // str retrn strong
    // str1 return week
    // str2 return week

    let num = 0;

    for (let i = 0; i < password.length - 1; i++) {
        let item = password[i];
        let nextItem = password[i + 1];

        let itemCode = item.charCodeAt();
        let nextCode = nextItem.charCodeAt();

        if (itemCode + 1 !== nextCode && item !== nextItem) {
            num++;
        }
    }

    return num > 1 ? 'strong' : 'week';
}


console.log(solution(str1))