function solution(num_list) {
    var a = [], b = [];
    num_list.filter((num) => num % 2 === 0 ? a.push(num) : b.push(num))
    
    return [a.length, b.length];
}