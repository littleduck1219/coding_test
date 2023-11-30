function solution(n) {
    let answer = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            answer += 1;
            if (i !== n / i) {
                answer += 1;
            }
        }
    }
    return answer;
}