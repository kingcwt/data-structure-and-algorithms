

const solution = (arr) => {
    let react = []
    for (let i = 0; i < arr[0].length; i++) {
        let result = []
        arr.forEach((item) => {
            result.push(item[i])
        })

        react.push(result)
    }


    return react
}


console.log(solution([[5, 3, 1, 4, 2], [1, 4, 2, 3, 5]]))