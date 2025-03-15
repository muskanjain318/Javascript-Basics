//array like object are object that have indexed element and a length property similar to an array but they may not have all methods like push pop etc.. 

// array like objects example are arguments, strings and HTML collections

// we can use array function on the array like objects by converting them into the array

// we have 3 methods to convert them, Array.form(), spread syntax (....), Array.prototype.slic.call()


var arraylike = {0: 'a', 1: 'b',2: 'c', length: 3}


// using Array.form()  

var array1 = Array.from(arraylike)
console.log(`using Array from method ${array1} array1`);

// using spread syntax

// var array2 = [...arraylike]
// console.log(array2);

// using Array.prototype.slice.call()

var array3 = Array.prototype.slice.call(arraylike)
console.log("using prototype method "+ array3);



