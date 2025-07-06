// function solution(arr) {
//     const firstTwoIndex = arr.indexOf(2);
//     const lastTwoIndex = arr.lastIndexOf(2);
    
//     if (firstTwoIndex === -1) {
//         return [-1];
//     }
    
//     return arr.slice(firstTwoIndex, lastTwoIndex + 1);
// }

function solution(arr) {
    let firstIndex = -1;
    let lastIndex = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            firstIndex = i
            break;
        }
    }
    
    if (firstIndex === -1) {
        return [-1];
    }
    
    for (let i = arr.length - 1; i >=0; i--) {
        if (arr[i] === 2) {
            lastIndex = i;
            break;
        }
    }
    
    return arr.slice(firstIndex, lastIndex + 1);
}