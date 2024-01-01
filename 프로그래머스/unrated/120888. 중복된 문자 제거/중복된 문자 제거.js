function solution(my_string) {
    var answer = '';
    let string = my_string.split("")
    
    for(let i = 0; i < string.length; i++) {
        if (!answer.includes(string[i])) {
            answer += string[i]
        }
    }
    
    return answer;
}