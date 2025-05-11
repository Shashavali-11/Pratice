import {React, useState} from 'react'

const Usestate = () => {

    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1); console.log(count+1) }
    const decrement = () => { 
        if(count == 0){
            alert("Count is Zero");
            console.log("Count must be greater than Zero")
        }else{
            setCount(count - 1)
            console.log(count-1)
        }
    }



  return (
    <div>
        <h1>Number of times button {count} clicked. </h1>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <button onClick={increment}>Increment</button>&emsp;&emsp;
        <button onClick={decrement}>Decrement</button>&emsp;&emsp;

        <button onClick={() => setCount(0)} >Reset</button>

        {/* <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button> */}

        
      
    </div>
  )
}

export default Usestate


