function solution(s) {
	let split_words = s.split(" ");
	for (let i = 0; i < split_words.length; i++) {
		let word = split_words[i].split("");
		for (let j = 0; j < word.length; j++) {
			if (j % 2 === 0) {
				word[j] = word[j].toUpperCase();
			} else {
				word[j] = word[j].toLowerCase();
			}
		}
		split_words[i] = word.join("");
	}
	return split_words.join(" ");
}
