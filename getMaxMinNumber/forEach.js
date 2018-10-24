function getMaxMinNumber(arr) {
    var max = 0; 
    var min = 0;
    arr.forEach(function(number) {
        if(number > max) {
            max = number;
        }
        if(number === 0 || number < min) {
            min = number;
        }
    })
    return {max, min};
}
console.log(getMaxMinNumber([1, 0, 6, -80]));
