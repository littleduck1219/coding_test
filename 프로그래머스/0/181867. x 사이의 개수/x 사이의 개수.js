function solution(myString) {
//     var answer = [];
//     let split = myString.split("x");
//     console.log(split)
    
//     for (let i = 0; i < split.length; i++) {
//         answer.push(split[i].length)
//     }
    
//     return answer;
    
    return myString.split("x").map(item => item.length)
}