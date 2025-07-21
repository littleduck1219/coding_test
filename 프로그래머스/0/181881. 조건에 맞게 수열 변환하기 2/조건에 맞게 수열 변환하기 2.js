function solution(arr) {
    let count = 0;
    
    while(true) {
        const prevArr = [...arr];
        
        arr = arr.map(item => {
            if (item >= 50 && item % 2 === 0) {
                return item / 2;
            } else if (item < 50 && item % 2 !== 0) {
                return item * 2 + 1;
            }
            return item;
        });
        
        const isSame = arr.every((val, index) => val === prevArr[index]);
        
        if (isSame) {
            break;
        }
        
        count++;
    }
    
    return count;
}