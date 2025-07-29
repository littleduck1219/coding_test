function solution(myString) {
//     let stringArr = myString.split("");
    
//     for (let i = 0; i < stringArr.length; i++) {
//         if ( stringArr[i] === 'a') {
            
        
//             stringArr[i] = 'A'
//         } else if (stringArr[i] !== 'A' && stringArr[i] === stringArr[i].toUpperCase()) {
//             stringArr[i] = stringArr[i].toLowerCase();
//         }
//     }
    
//     return stringArr.join("")
    
    return myString.toLowerCase().replaceAll('a', 'A');    
}