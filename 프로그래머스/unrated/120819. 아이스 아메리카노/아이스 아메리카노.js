function solution(money) {
    var answer = [];
    
    answer.push(Math.floor(money/5500))
    answer.push(Math.floor(money%5500))
    
    
    return [~~(money/5500), ~~(money%5500)];
}