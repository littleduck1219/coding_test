function solution(my_string) {
    var answer = [];
    let number = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i]) && my_string[i] !== " ") {
            answer.push(parseInt(my_string[i]))
        }
    }
    
    
    answer.sort((a, b) => a - b)
    return answer;
}