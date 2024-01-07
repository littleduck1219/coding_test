function solution(cipher, code) {
    var answer = '';
    for (let i = 1; i * code <= cipher.length; i++ ) {
        answer += cipher[code * i - 1]
    }
    return answer;
}