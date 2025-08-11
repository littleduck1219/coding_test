function solution(arr, flag) {
//     var answer = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (flag[i]) {
//             const numAdd = arr[i];
//             for (let j = 0; j < numAdd * 2; j++) {
//                 answer.push(numAdd)
//             }
//         } else {
//             const numRemove = arr[i];
//             for (let j = 0; j < numRemove; j++) {
//                 answer.pop();
//             }
//         }
//     }
//    return answer;
    
    return arr.reduce((acc, num, i) => {
        if (flag[i]) {
            return acc.concat(Array(num * 2).fill(num))
        } else {
            return acc.slice(0, acc.length - num)
        }
    },[])
}