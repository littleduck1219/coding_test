function solution(n, k) {
    const answer = [];
    
    for (let i = 1; i <= n; i++) {
        const tmp = k * i;
        tmp <= n && answer.push(tmp)
    }
    
    return answer;
}