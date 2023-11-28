function solution(my_string, n) {
    // return my_string.split("").reduce((acc, a) => a * n)
    
    let answer = "";
    for (let i = 0; i < my_string.length; i++) {
        answer += my_string[i].repeat(n)
        // console.log(my_string[i])
    }
    return answer;
}