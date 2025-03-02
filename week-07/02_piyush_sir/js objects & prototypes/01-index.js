// const obj1 = {
//     fname:'Piyush',
//     lname:'Garg',
//     getFullname: function(){
//         if(this.fname !== undefined) return `${this.fname} ${this.fname}`;
//         return `${this.fname} ${this.fname}`
//     }
// }


// const obj2 = {
//     fname:'Anirudh',
//     lname:'Jwala',
//     getFullname: function(){
//         return `${this.fname} ${this.fname}`
//     }
// }

// // DRY - Do not repeat yourself


// console.log(obj1.getFullname());
// console.log(obj2.getFullname());


/******************************  *******************************/

const obj1 = {
    fname:'Piyush',
    lname:'Garg',
    getFullname: function(){
        if(this.fname !== undefined) return `${this.fname} ${this.fname}`;
        return `${this.fname} ${this.fname}`
    }
}


const obj2 = {
    fname:'Anirudh',
    lname:'Jwala',
}


obj2.__proto__ = obj1;
// obj1.__proto__ = null; 


// DRY - Do not repeat yourself



console.log(obj1.getFullname());
console.log(obj2.getFullname());

console.log(obj2.toString());