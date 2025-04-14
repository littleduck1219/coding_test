function solution(my_strings, parts) {
    const answer = [];
    for (let i = 0; i < my_strings.length; i++) {
        const [s, e] = parts[i]
        const arrPart = my_strings[i].slice(s, e + 1)
        answer.push(arrPart);
    }
    return answer.join("")
}