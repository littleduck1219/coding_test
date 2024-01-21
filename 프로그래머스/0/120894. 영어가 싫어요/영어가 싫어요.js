function solution(numbers) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for (let i = 0; i < words.length; i++) {
        while (numbers.includes(words[i])) {
            numbers = numbers.replace(words[i], i);
        }
    }

    
    return parseInt(numbers);
}