function solution(l, r) {
    let answer = [];
    for (let i = l; i <= r; i++) {
        let stringNum = i.toString();
        let pointer = true;
        
        for (let char of stringNum) {
            if (char !== "0" && char !== "5") {
                pointer = false;
                break;
            }
            
        }
        if (pointer) {
            answer.push(i);
        }   
    }
    if (answer.length === 0) { return [-1]}
    
    return answer;
}