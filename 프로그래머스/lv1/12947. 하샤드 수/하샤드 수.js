function solution(x) {
	let num = x.toString();
	let sum = 0;
	for (let i = 0; i < num.length; i++) {
		sum += parseInt(num[i]);
	}
	if (x % sum == 0) {
		return true;
	} else {
		return false;
	}
}