// ForOf and Forin loops for strings,array and objects. 
// forIn loops get keys under the arrays but forOf loops get direct values in an array
// for of


// Strings
const greeting = "Hello Studnet";
for (const greet of greeting) {
    console.log(`each char of greeting ${greet}`);
       
}

// array
const numbers = [10,20,30,40,50];
for (const num of numbers) {
    console.log(`numbers in an array ${num}`);
    
}

// object: forof loop does not work on object
/*const fruits = {
    'type': "Banana",
    'color': "yellow",
    'count': 5
}
for (const [key, value] of fruits) {
    console.log(key,value);
    
}
    */



// For in loop on objects

const fruits = {
    type:'Banana',
    color:'yellow',
    count:5
}

for (const keys in fruits) {
//    console.log(`${keys} values for object ${fruits[keys]}`);
console.log(`${keys} value is ${fruits[keys]}`);

   
}
// for each loop

const myArr2 = ["js", "cpp","java"]
// myArr2.forEach( function (valA){
// console.log(valA);

// })


myArr2.forEach( (valA) => {
    console.log(valA);
    
});