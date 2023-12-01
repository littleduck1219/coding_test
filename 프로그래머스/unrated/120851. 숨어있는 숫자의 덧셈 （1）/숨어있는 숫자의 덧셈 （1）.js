function solution(my_string) {
//     var answer = 0;

//     for(let i=0; i < my_string.length; i++) {
//         if(Number.isInteger(my_string[i])) {
//             console.log(my_string[i])
//             answer += my_string[i]
//         }
//     }
    
    return my_string.split("").reduce((prev, curr) => {return !isNaN(curr) ? prev + Number(curr) : prev},0)
 
}