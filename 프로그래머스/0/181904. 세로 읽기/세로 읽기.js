function solution(my_string, m, c) {
    // let answer = "";
    // for (let i = c - 1; i < my_string.length; i += m) {
    //     answer += my_string[i];
    // }

    const rows = [];
    let answer = '';
    
    for (let i = 0; i < my_string.length; i += m) {
        rows.push(my_string.substring(i, i + m).split(''))
    }
    
    for (let i = 0; i < rows.length; i++) {
        answer += rows[i][c -1];
    }
    
    return answer;
}