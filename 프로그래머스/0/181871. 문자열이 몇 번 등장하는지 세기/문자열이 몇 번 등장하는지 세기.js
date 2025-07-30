function solution(myString, pat) {
//     let count = 0;
//     for (let i = 0; i <= myString.length - pat.length; i++) {
//         if (myString.slice(i, i + pat.length) === pat) {
//             count++
//         }
//     }
    
//     return count;
    
    let count = 0;
    let searchIndex = -1;
    while((searchIndex = myString.indexOf(pat, searchIndex + 1)) !== -1) {
        count++;
    }
    
    
    return count;
}