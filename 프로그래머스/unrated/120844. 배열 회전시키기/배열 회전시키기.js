function solution(numbers, direction) {
    if (direction === 'left') {
        const first = numbers.shift();
        numbers.push(first)
    } else {
        const last = numbers.pop();
        numbers.unshift(last)
    }
    return numbers;
}