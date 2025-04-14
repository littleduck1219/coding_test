function solution(my_string, is_suffix) {
    let answer = [];
    for (let i = 0; i < my_string.length; i++) {
        const sliceString = my_string.slice(i);
        answer.push(sliceString);
    }
    return answer.includes(is_suffix) ? 1 : 0;
}