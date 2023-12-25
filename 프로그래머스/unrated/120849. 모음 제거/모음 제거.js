function solution(my_string) {
    var answer = "";
    let string = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < my_string.length; i++) {
        if (!string.includes(my_string[i])) {
            answer += my_string[i]
        }
    }
    return answer;
}