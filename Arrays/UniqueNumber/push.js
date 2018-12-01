function uniqueNumber(arr) {
    var unqNumbers = [];
    var tmp = {};

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] in tmp) continue
            unqNumbers.push(arr[i]);
            tmp[arr[i]] = 1;
    }
    return unqNumbers;
}
console.log(uniqueNumber([0,1,2,2,3,3,3,0,4]));
