function solution(n) {
    let numArray = String(n).split("")
    return numArray.reduce((acc, acr) => Number(acc) + Number(acr), 0)
}