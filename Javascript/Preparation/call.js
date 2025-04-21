let printFullName = function (){
    console.log(this.fName + " " + this.lName)
}


let name = {
    fName : "Shasha",
    lName : "Vali",    
}


let name2 = {
    fName : "Madhav",
    lName : "Rao",
}

printFullName.call(name); // → Output: Shasha Vali
printFullName.call(name2); // → Output: Madhav Rao

// ---------------------------------------------------------------------------------------------------->

const person = { name: 'Piyush' };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}

let abc = sayHi.bind(person, 12)

console.log(sayHi.call(person, 24)); // ---1?
// console.log(sayHi.bind(person, 24)); //---2?
console.log(abc())
