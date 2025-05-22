function solution(my_string) {
    const answer = new Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++ ) {
        const char = my_string[i];
        const charCode = char.charCodeAt(0)
        
        if (charCode >= 65 && charCode <= 90) {
            answer[charCode - 65]++
        } else if (charCode >= 97 && charCode <= 122) {
            answer[charCode - 97 + 26]++
        }
    }
    
    return answer;
}