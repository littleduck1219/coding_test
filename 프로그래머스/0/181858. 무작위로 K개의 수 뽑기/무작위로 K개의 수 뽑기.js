function solution(arr, k) {
    var answer = [];
    let count = 0;
    
    while(answer.length < k && count < arr.length) {
        if (!answer.includes(arr[count])) {
            answer.push(arr[count])
        }
        
        count++
    } 
    
    while(answer.length < k) {
        answer.push(-1)
    }
    
    return answer;
}