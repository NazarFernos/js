function getFibonachiNumbers(n) {
	var firstNum = 1;
	var secondNum = 1;
	var nextNum = 3;
	for ( nextNum; nextNum <= n; nextNum++) {
		var sum = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = sum;
	}
	return secondNum;
}
console.log (getFibonachiNumbers (3));
console.log (getFibonachiNumbers (6));
console.log (getFibonachiNumbers (10));
