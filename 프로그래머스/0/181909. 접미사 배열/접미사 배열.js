function solution(my_string) {
    var answer = [];
    for (let i = 0; i < my_string.length; i++) {
        const sliceStr = my_string.slice(i- my_string.length)
        answer.push(sliceStr)
    }
    return answer.sort();
}