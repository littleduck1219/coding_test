function solution(arr) {
    i = 0;
    var stk = [];
    
    while(i < arr.length) {
        if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i])
            i++
        } else if(stk[stk.length -1] >= arr[i]) {
            stk.pop()
        }
    }
    return stk;
}