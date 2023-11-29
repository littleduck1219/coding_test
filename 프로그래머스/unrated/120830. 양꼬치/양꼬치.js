function solution(n, k) {    
    let costA = 12000 * n;
    let costB = 2000 * k
    let discount = parseInt(n / 10) * 2000
    
    return costA + costB - discount
}