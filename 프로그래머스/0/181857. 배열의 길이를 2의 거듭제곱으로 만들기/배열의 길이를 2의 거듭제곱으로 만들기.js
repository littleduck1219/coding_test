function solution(arr) {
    const length = arr.length;
    
    if ((length & (length - 1)) === 0) {
        return arr
    }
    
    let next = 1;
    while (next < length) {
        next *= 2
    }
    
    const add = next - length;
    return [...arr, ...Array(add).fill(0)]
}