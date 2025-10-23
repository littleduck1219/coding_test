function solution(a, b) {
    const odd = (num) => num % 2
    const pow = (num) => Math.pow(num, 2)
    
    if (odd(a) && odd(b)) return pow(a) + pow(b);
    if (odd(a) || odd(b)) return 2 * (a + b);
    if (!odd(a) && !odd(b)) return Math.abs(a - b)
}