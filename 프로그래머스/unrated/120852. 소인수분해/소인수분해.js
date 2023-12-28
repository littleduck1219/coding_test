function solution(n) {
    var answer = [];
    let divisor = 2;
    
    while (n > 1) {
        if (n % divisor == 0) {
            n /= divisor;
            if (!answer.includes(divisor)) {
                answer.push(divisor);
            }
        } else {
            divisor++;
        }
    }
    
    return answer;
}