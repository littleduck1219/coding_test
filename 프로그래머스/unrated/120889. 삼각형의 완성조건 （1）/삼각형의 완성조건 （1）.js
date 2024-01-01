function solution(sides) {   
    let array = sides.sort((a , b) => a - b)
    let [a, b, c] = array;
    console.log(a, b, c)
    if (a + b > c) {
        return 1
    } else {
        return 2 
    }
}