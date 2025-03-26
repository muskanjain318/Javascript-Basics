const user = {
    username:"hitesh",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to webiste`)
        console.log(this);
        
    }
}

// console.log(user.welcomeMsg());
user.username="Muskan"
user.welcomeMsg();
// when we run below this in browser it gives window object. window object is a global object of browser 
console.log(this);


function hello(){
    // console.log(this);
    let username = "abc"
    console.log(this.username);
    
}
hello();

// First syntax to declare arrow function
const addTwo = (num1,num2) => {
return num1+num2
}

console.log(addTwo(2,5));


// implicit return

const addThree = (num1,num2) =>  num1+num2
    
    console.log(addThree(2,5));

// 3rd type
const addFour = (num1,num2) =>  (num1+num2)
    
    console.log(addFour(2,5));

    // when we use return keyword we need to use {} braces.

    // run ibject
    const adddFive = () => ({username: "mnj"});

     console.log(adddFive());
    //  imidiate invoked function expression

    (function hey(){
        console.log("hey From IIFE");
        
    })();

    // after the IIFE we need to add semicolon

    (() => {
        console.log("hey From IIFE second");
        
    })();

    // IIFE with variable

    ((name) => {
        console.log(`Hello from iffi variable ${name} `);
        
    })("Muskan");