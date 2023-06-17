function solution(n) {
    let arr = [];
    while (n > 0) {
        arr.push(n % 3);
        n = Math.floor(n / 3);
    }
    let answer = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        answer += arr[i] * Math.pow(3, arr.length - 1 - i);
    }
    return answer;
}