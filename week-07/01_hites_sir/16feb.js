// Function.prototype.describe = function(){
//     console.log(`Function name is ${this.name}`);
// }

// function greet(name){// name is argument
//     return `Hello ${name}`
// }

// greet('vishal');

// greet.describe(); // this.name is function name


// // funtion decalaration
// function add(a, b){
//     return a+b;
// }

// // fucntion expression
// const substraction =  function(a, b){
//     return a-b;
// }
// // arrow fucntiomn
// const multiplay = (a, b) => a*b;


// // first class fucntion
// function applyOperations(a,b, operation){
//     return operation(a, b)
// }

// const result = applyOperations(5, 4, (x,y)=> x/y)


// function createCounter(){
//     // tiffin concept
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
    
// }
// const counter = createCounter();
// console.log(counter());



// function onef(){
//     let myName = 'hitesh';
// }

// console.log(myName);



// // IIFE => Imidiate invoke function expression
// (function(){
//     console.log("Hitesh");
// })

// ()()


// (function(){

// })()




// let PersonDetails= {
//     fname: "Yuvraj",
//     lname: "Saw Gupta"
// };

// console.log(PersonDetails.fname); // Output: Yuvraj
// console.log(PersonDetails["lname"]); // Output: Saw Gupta

// let obj1 = {
//     h: 1,
//     s: 2
// };

// PersonDetails.address = obj1;




// console.log(PersonDetails);

// PersonDetails.greetMe = function(){
//     console.log(`Hey ${this.fname} is here !`);
// };

// PersonDetails.greetMe();

// // PersonDetails["greetMe"] = function(){
// //     console.log(`Hey ${this.fname} is here !`);
// // };

// // PersonDetails.greetMe();


// const randomPerson = {
//     fname: "John", 
//     lname: "Doe",
//     age: Math.floor(Math.random() * 100),
//     city: "New York",
//     isEmployed: Math.random() > 0.5,
//     favoriteColor: ["Red", "Blue", "Green", "Yellow"][Math.floor(Math.random() * 4)]
// };

// for(let key in randomPerson){
//     console.log(key + " : " + randomPerson[key])
// }

// console.log(PersonDetails.__proto__);
// Object.prototype.getChai = function (){
//     console.log('Take green tea');
// };


// const arr = [1,3,4,5,6];

// console.log(arr.__proto__);


const obj1 = {
    brand: "Tesla",
    price: "3M"
}

const obj2 = {
    color: "black",
    plateNo: "IN9V67",
    add:{
        h:1
    }
}

console.log({...obj1, ...obj2})

console.log(Object.assign({}, obj1, obj2));


