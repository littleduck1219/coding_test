function solution(num, k) {
    let array = String(num).split("")
    
    for(let i = 0; i <= array.length; i++) {
        console.log(Number(array[i]), k)
        if (Number(array[i]) === k) {
            console.log(i)
            return  i + 1
        }
    }    
    return -1;
}