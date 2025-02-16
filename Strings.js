const name = "Muskan";
const count = 30;
console.log(name +" "+ count);
console.log(`this program shows ${name} how to print string values ${count}`);

// string declaration
const getName = new String("muskanjain");
console.log(getName[0]);
console.log(getName[1])
console.log(getName.toUpperCase());
console.log(getName.length);
console.log(getName.charAt(2));
console.log(getName.indexOf('s'));

const newName = getName.substring(0,4);
console.log(newName);

const newSliceString = getName.slice(0,4);
console.log(newSliceString);

console.log("slice with negative index");
const slicenew = getName.slice(-11, 4);
console.log(slicenew)

let car = "  T-oy-ota  ";
console.log(car);
console.log(car.trim());

let carOne = car.replace('T', "P");
console.log(carOne);
console.log(car.includes('ar'));
console.log(car.includes('y'));
console.log(car.split('-'));



