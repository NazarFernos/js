function deleteUnSameNumber(arr) {

    for(var i = 0; i < arr.length; i++) {
        if(isNumberNonDuplicating(arr[i], arr)) {
            delete arr[i];
        } 
    }
    return arr.filter(n => n >= 0);
}

function isNumberNonDuplicating(n, arr) {

    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(n === arr[i]) {
            count++;
        }
    }
    return count < 2;
}
console.log(deleteUnSameNumber([7,5,0,1,2,2,3,5,3,3,0,4,4,-2,-2,-80])); 
//[5, 0, 2, 2, 3, 5, 3, 3, 0, 4, 4]
