function solution(names) {
//     let answer = [];
    
//     for (let i = 0; i < names.length; i++) {
//         if (i % 5 === 0) {
//             answer.push(names[i])
//         }
//     }
//     return answer;
    
     // return Array.from({ length: Math.ceil(names.length / 5) }, (_, i) => names[i * 5]);
    
    return Array.from({length: Math.ceil(names.length/5)}, (_, i) => names[i * 5])
}