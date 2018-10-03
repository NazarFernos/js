var arrayOfNumbers = [3,54,2,68,99,16];

function sortingArray (arrayOfNumbers) {
	var n = arrayOfNumbers.length;
	for ( let i = 0; i < n; i++) {
		for ( let j = i+1; j<n; j++) {
			if (arrayOfNumbers[i] >  arrayOfNumbers[j]) {
				j=arrayOfNumbers[i];
				arrayOfNumbers[i] = arrayOfNumbers[j];
				arrayOfNumbers[j] = j;
				}
		}
	}
	return arrayOfNumbers;
}
console.log(sortingArray(arrayOfNumbers));