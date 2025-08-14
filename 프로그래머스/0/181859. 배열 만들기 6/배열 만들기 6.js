function solution(arr) {
//     var stk = [];
//     for(let i = 0; i < arr.length; i++) {
//         if (stk.length === 0) {
//             stk.push(arr[i])
//         } else if (stk[stk.length - 1] === arr[i]) {
//             stk.pop(-1)
//         } else {
//             stk.push(arr[i])
//         }
//     }
    
//     return stk.length > 0 ? stk : [-1];
    
    const stack = [];
    for (const cur of arr) {
        if (stack.length > 0 && stack[stack.length - 1] === cur) {
            stack.pop()
        } else {
            stack.push(cur);
        }
    }
    
    return stack.length > 0 ? stack : [-1]
}