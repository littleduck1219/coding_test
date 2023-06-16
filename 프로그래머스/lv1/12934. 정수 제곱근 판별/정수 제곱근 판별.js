function solution(n) {
	let num = Math.sqrt(n);
	console.log(num);

	if (Number.isInteger(num)) {
		return parseInt((num + 1) ** 2);
	} else {
		return parseInt(-1); //<=====1.7320508075688772????????  == inInteger(n) false 따봉
	}
}