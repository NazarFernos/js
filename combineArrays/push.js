function combineArrays(arr) {
    var arrTwo = [4,5,6];

    for(var i = 0; i < arrTwo.length; i++) {
        arr.push(arrTwo[i])
    }
    return arr;
}
console.log(combineArrays([1,2,3]));
