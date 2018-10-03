var array = [3,99,55,100,25];
var arraySum = 0;
function getSums (arr) {
	let result = [];
	if (!arr.length) return result;
array.forEach( function (item) {
	arraySum += item;
}) ;
	let totalSum = arr.reduce (function (sum, item) {
		result.push( sum );
		return sum + item;
	});
	result.push(totalSum);
console.log( arraySum);