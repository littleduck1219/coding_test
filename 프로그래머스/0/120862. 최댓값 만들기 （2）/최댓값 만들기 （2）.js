function solution(numbers) {
    let maxNum = -Infinity;
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const a = numbers[i] * numbers[j];
            console.log(i, j, a)
            if (maxNum < a) {
                maxNum = a;
            }
        }
    }
    
    return maxNum;
}