function longestStr(arr) {
    var longest = 0;
    var length = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length > length) {
            length = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}
console.log(longestStr(['fist', 'second', 'third']));
