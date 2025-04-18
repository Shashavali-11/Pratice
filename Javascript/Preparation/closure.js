function counter(){
    let count = 0;
    return ()=>{
        count++;
        return count;
    }

}

const abc = counter()
abc() //1
abc() //2
abc() //3 
abc() //4
console.log(abc()) //5 
