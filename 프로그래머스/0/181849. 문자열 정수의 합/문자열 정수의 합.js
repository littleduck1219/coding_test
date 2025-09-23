function solution(num_str) {
    // return num_str.split("").reduce((acc, cur) => acc += Number(cur), 0)
    
    return Array.from(num_str, Number).reduce((a, b) => a + b, 0)
    
}