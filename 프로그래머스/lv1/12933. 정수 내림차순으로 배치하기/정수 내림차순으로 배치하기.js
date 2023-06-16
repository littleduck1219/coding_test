function solution(n) {
	let num = n.toString().split("");
    num.sort((a, b) => b - a);
    return parseInt(num.join(""))
}