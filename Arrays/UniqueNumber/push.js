function deleteDuplicates(arr) {
    var newArr = [];
    var found = 0, i, j;

    for(var i = 0; i < arr.length; i++) {
        found = false;
        for(var j = 0; j < newArr.length; j++) {
            if(arr[i] === newArr[j]) {
                found = true;
            }
        }
        if(!found) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(deleteDuplicates([7,5,0,1,2,2,3,5,3,3,0,4,4,-2,-2,-80]));
\\[7, 5, 0, 1, 2, 3, 4, -2, -80]
