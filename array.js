const myArr = [0,1,2,3,4,5];
console.log("orignal arrar " +myArr);
console.log("access particular value " + myArr[3]);


const myArr2 = new Array(1,2,3,4,5);
console.log("Print lenght "+ myArr2.length);



// Method
myArr.push(6);
myArr.push(7);
// myArr.pop();
console.log(myArr);

// shift=remove from 0 index, unshift add value

// myArr.unshift(90)
// myArr.shift();
console.log(myArr);


// Slice and Splice
// Splice include last range of array element. it removes the complete section from the original array. 
// Slice only retrive values except the last range and does not remove any section from the orignal array.

let newArr2 = new Array (10,20,30,40,50)
console.log("print orignal array " + newArr2)

let newArrSlice = newArr2.slice(1,3);
console.log("slice arra "+ newArrSlice);
console.log("Array after slice operation " + newArr2);

let newArrSplice = newArr2.splice(1,3)
console.log("Splice array " + newArrSplice);
console.log("Array after splice operation "+ newArr2);

// Array concatination

const marvel_heros = ["thor", 'iron mane','spiderman']
const dc_heros = ["superman", "flash","batman"]
marvel_heros.push(dc_heros)
// console.log(marvel_heros);
const newheros = marvel_heros.concat(dc_heros)
console.log(newheros);

console.log("spread operator");
 const all_new_heros = [...marvel_heros,...dc_heros]
 console.log(all_new_heros);
 console.log("using flat");
 

 const another_array = [1,2,3,[4,5,6],7,[6,7,[5,6]]];
 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);
 
console.log("convert into array");

console.log(Array.isArray("Muskan"));
console.log(Array.from("Muskan"));

console.log(Array.from({name:"Muskan"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));



