function solution(a, b, c, d) {
    const counts = {};
    [a, b, c, d].forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    })
    
    const keys = Object.keys(counts).map(Number); // 출현한 숫자들
    const values = Object.values(counts); // 각 숫자의 출현 횟수
    
    if (values.includes(4)) {
        return 1111 * keys[0]
    } else if (values.includes(3)) {
        const p = keys[values.indexOf(3)]
        const q = keys[values.indexOf(1)]
        return Math.pow(10 * p + q, 2)
    } else if (values.includes(2) && values.length === 2) {
        return (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1])
    } else if (values.includes(2) && values.length === 3) {
        const singleValues = keys.filter(key => counts[key] === 1)
        return singleValues[0] * singleValues[1]
    } else {
        return Math.min(a,b,c,d)
    }
        
}