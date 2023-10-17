function sumOfMultiples(n) {
    let str = 0
    for (let i = 3; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            str += i
        }
    }

    return str
};