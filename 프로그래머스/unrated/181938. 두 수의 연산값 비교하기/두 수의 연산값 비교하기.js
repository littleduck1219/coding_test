function solution(a, b) {
    var answer = 0;
    let num_a = Number(String(a) + String(b));
    let num_b =  2 * a * b;
    
    return num_a === num_b ? num_a : num_a > num_b ? num_a : num_b
}