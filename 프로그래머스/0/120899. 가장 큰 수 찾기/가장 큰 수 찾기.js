function solution(array) {
    let answer = [];
    let maxNum = 0;
    let maxNumIndex = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
            maxNumIndex = i
        }
    }
    answer.push(maxNum)
    answer.push(maxNumIndex)
    
    return answer;
}