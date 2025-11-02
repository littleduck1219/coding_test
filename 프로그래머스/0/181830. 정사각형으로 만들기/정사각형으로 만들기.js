function solution(arr) {
    let l = arr.length;
    let s = arr[0].length;
  
    if (l > s) {
        let add = l - s;
        
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < add; j++) {
                arr[i].push(0);
            }
        }
    }

    else if ( s > l) {
        let add = s - l;
        let newArr = Array(s).fill(0);
        
        for (let i = 0; i < add; i++) {
            arr.push(newArr);
        }
    }

    
    return arr;
}