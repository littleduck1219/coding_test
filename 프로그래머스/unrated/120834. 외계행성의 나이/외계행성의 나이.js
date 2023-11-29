function solution(age) {
    let apb = 'abcdefghij'.split("")
    
    return String(age).split("").map(num => apb[parseInt(num)]).join("")
}