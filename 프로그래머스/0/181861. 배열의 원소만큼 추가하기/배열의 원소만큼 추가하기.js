function solution(arr) {
//     let answer = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i]; j++) {
//             answer.push(arr[i])
//         }
//     }
    
//     return answer;
    
    // return arr.flatMap(num => Array(num).fill(null))
    return arr.reduce((arr, cur) => {
        return arr.concat(Array(cur).fill(cur))
    }, [])
}