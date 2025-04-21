// Problem 1 :- Create an object with your name and age, and update the age.
let obj1 = {
    name : "Shasha",
    age : 22
}
// console.log(obj1.age = 23) // → Output: 23

// Problem 2 :- Count the number of characters in a string
let obj2 = "apple" // → Output: { a: 1, p: 2, l: 1, e: 1 }
// countCharacters(obj2)
function countCharacters(obj){
    let count = {};
    for(i=0; i<obj.length; i++){
        if(count[obj[i]]){
            count[obj[i]] += 1
        }
        else{
            count[obj[i]] = 1
        }
    }
    console.log(count)
}
     
// Problem 3 :- 
let obj3 = [
    {name: "A", age: 20},
    {name: "B", age: 25},
    {name: "C", age: 20}
] // Output: {20: ["A", "C"], 25: ["B"]}
// groupByAge(obj3)
function groupByAge(obj){
    let output = {};
    for(i=0; i<obj.length; i++){
        if(output[obj[i].age]){
            output[obj[i].age].push(obj[i].name)
        }else {
            output[obj[i].age] = [obj[i].name]
        }
    }
    console.log(object = output)
        


}


arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// }
console.log(arr.at(-5)) // → Output: 6
console.log(arr.at(-3)) // → Output: 8