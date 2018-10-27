function deleteEvenNumbers(arr) {
    var oddNumbers = [];

    for(var i = 0; i < arr.length; i++) {
        if((arr[i] % 2) === 1) {
            oddNumbers.push(arr[i])
        }
    }
    return {oddNumbers};
}
console.log(deleteEvenNumbers([1, 0, 6, 5, 3, 3, -80]));