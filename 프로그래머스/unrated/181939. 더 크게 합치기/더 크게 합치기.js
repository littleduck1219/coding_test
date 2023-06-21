function solution(a, b) {
    const stra = String(a) + String(b)
    const strb = String(b) + String(a)
    return Number(stra > strb ? stra : strb)
}