function solution(numbers) {
    let num = 45;
    for (i=0;i<numbers.length;i++){
        num -= numbers[i]
    }
    return num;
}