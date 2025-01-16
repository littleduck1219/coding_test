function solution(quiz) {
    let answer = []
    for(let i = 0; i < quiz.length; i++) {
        let splitArray = quiz[i].split(" ")
        if (splitArray[1] === "+") {
            if (Number(splitArray[0]) + Number(splitArray[2]) === Number(splitArray[4])) {
                answer.push("O")
            } else if (Number(splitArray[0]) + Number(splitArray[2]) !== Number(splitArray[4])) {
                 answer.push("X")
            } 
        } else if (splitArray[1] === "-") {
            if (Number(splitArray[0]) - Number(splitArray[2]) === Number(splitArray[4])) {
                 answer.push("O")
            } else if (Number(splitArray[0]) - Number(splitArray[2]) !== Number(splitArray[4])) {
                 answer.push("X")
            }
        }
    }
    return answer
}