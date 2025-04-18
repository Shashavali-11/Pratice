const employees = [
    {name : "Alice", salary : 50000 },
    {name : "Charlie", salary : 60000 },
    {name : "Bob", salary : 45000 },
]

const bona = 0.1;

out = {}

const eligibleEmployees = employees.filter(bon => bon.salary > 45000 )
// console.log(eligibleEmployees) // [ { name: 'Alice', salary: 50000 }, { name: 'Charlie', salary: 60000 } ] 


employees.map((user)=>{
    eligibleEmployees.map((emp)=>{
        if(user.name == emp.name){
            out[user.name] = emp.salary * bona
        }
    })  
})
// console.log(out) // { Alice: 5000, Charlie: 6000 }

// 
const TotalBonus = Object.values(out).reduce((acc, curr) => acc + curr, 0);
// console.log(TotalBonus) // 11000

// Bonus Calculation
employees.map((val)=>{
    if(val.salary > 45000){   
        console.log(`${val.name} earns ${val.salary} and got a bonus of ${val.salary * bona}`)
    }
})

console.log(`Total Bonus Given : ${TotalBonus}`);