function solution(num_list) {
    let count = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        let currentNum = num_list[i];
        
        while (currentNum !== 1) {
            if (currentNum % 2 === 0) {
                currentNum /= 2;
            } else {
                currentNum = (currentNum - 1) / 2;
            }
            
            count++;
        }
    }
    
    return count;
}