function solution(quiz) {
    let answer = []
    for (let i = 0; i < quiz.length; i++) {
        let splitArray = quiz[i].split(" ");
        let x = Number(splitArray[0]);
        let y = Number(splitArray[2]);
        let z = splitArray[1];
        let a = Number(splitArray[4]);
        
        let result = z === "+" ? x + y : x - y;
        answer.push(result === a ? "O" : "X");
    }    
    return answer;
}