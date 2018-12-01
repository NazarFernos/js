function spliceEvenNumbers(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(spliceEvenNumbers([1,2,3,4,5,6,7,8,9]));
