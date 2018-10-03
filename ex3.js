var arr = [1,3,5,8,3,1];

function returnUniqueVal (value, index, self) {
	return self.indexOf ( value ) == index;
	return result;
}
console.log( arr.filter ( returnUniqueVal) );