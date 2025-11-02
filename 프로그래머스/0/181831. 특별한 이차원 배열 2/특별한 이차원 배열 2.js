function solution(arr) {
    let a = 0;
    let b = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+ 1; j < arr[i].length; j++) {
            a = arr[i][j]
            b = arr[j][i]
            
            if (a !== b) return 0
        }
    } 
    
    return 1;
}