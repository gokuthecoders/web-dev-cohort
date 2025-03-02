class Person {
    constructor (fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    getFullname(){
        return `${this.fname} ${this.lname}`
    }
}

const obj1 = new Person('Piyush', "Garg");
console.log(obj1);

console.log(obj1.getFullname());



