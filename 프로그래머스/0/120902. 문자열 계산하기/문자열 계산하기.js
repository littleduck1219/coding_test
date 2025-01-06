function solution(my_string) {
    const stringArray = my_string.split(" ")
    let initialNum = Number(stringArray[0]);
    
    for (let i = 1; i < stringArray.length; i += 2) {
        let operator = stringArray[i];
        let additionalNum = Number(stringArray[i + 1]);
    
        if (operator === "+") {
            initialNum += additionalNum
        } else if (operator === "-") {
            initialNum -= additionalNum
        }

     
    }
    return initialNum;
}