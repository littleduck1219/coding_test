function solution(my_string, s, e) {
    const stringArr = my_string.split("");
    const answer = [];
    
    for (let i = 0; i < (e - s)/2; i++){
        const temp = stringArr[s + i];
        stringArr[s + i] = stringArr[e - i];
        stringArr[e - i] = temp
    }
    return stringArr.join("")
}