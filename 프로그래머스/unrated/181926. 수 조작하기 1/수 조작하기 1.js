function solution(n, control) {
    let array = control.split('')
    // console.log(array)
    let num = n;
    // switch(array) {
    //     case 'w':
    //         num += 1
    //     case 's':
    //         num -= 1
    //     case 'd':
    //         num += 10
    //     case 'a':
    //         num -= 10
    //     default:
    //         return num
    // }
    for (let con of array) {
        if (con === "w") {
            num += 1
        } else if (con === "s") {
            num -= 1
        } else if (con === "d") {
            num += 10
        } else if (con === "a") {
            num -= 10
        }
    }
    return num
        
}