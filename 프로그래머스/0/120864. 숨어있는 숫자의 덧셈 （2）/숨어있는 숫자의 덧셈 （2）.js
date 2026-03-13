function solution(my_string) {
    const result = my_string.split('').reduce((acc, char) => {
        if (!isNaN(char)) {
            acc.currentNumber += char;
        } else {
            if (acc.currentNumber !== '') {
                acc.sum += Number(acc.currentNumber);
                acc.currentNumber = '';
            }
        }
        return acc;
    }, {sum: 0, currentNumber: ''});
    
    if (result.currentNumber !== '') {
        result.sum += Number(result.currentNumber);
    } 
    
    return result.sum;
}