function solution(arr, k) {
    const odd = k % 2 === 1;
    
    return arr.map(item => odd ? (item * k) : (item + k))
    
}