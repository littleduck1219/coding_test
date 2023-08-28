function solution(num_list) {
    let num_a = [];
    let num_b = [];
    
    for (let num of num_list) {
        if (num%2 === 0) {
            num_a.push(num)
        } else {
            num_b.push(num)
        }
    }
    let sum_a = Number(num_a.join(''));
    let sum_b = Number(num_b.join(''));
    return sum_a + sum_b
}