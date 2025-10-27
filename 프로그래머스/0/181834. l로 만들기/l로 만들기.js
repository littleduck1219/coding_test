function solution(myString) {
    return [...myString].map(char => {
        return char < "l" ? 'l' :char
    }).join('')
}