function solution(numbers, target) {
    return dfs(numbers, target, 0, 0);
}

function dfs(numbers, target, index, sum) {
    if(index === numbers.length) {
        return sum === target ? 1 : 0;
    }

    let result = 0;
    result += dfs(numbers, target, index + 1, sum + numbers[index]); // 현재 숫자를 더하는 경우
    result += dfs(numbers, target, index + 1, sum - numbers[index]); // 현재 숫자를 빼는 경우

    return result;
}