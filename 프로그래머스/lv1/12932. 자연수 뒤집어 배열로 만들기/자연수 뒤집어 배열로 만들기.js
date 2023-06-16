function solution(n) {
	var answer = [];
	let num = n.toString().split("");
	console.log(num);
    for (let i = num.length - 1; i >= 0; i--) {
        answer.push(parseInt(num[i]));
    }
	return answer;
}
