function solution(my_string, index_list) {
    var answer = '';
    
    for (const num of index_list) {
        answer += my_string[num]
    }
    
    return answer;
}