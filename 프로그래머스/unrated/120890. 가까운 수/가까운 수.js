function solution(array, n) {
    var answer = 0;
    let closeNum = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < array.length; i++) {
        let positionNum = Math.abs(array[i] - n);
        if (positionNum < closeNum) {
            closeNum = positionNum;
            answer = array[i]
        } else if (positionNum === closeNum) {
            answer = Math.min(answer, array[i])
        }
    }
    
    return answer;
}