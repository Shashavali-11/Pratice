import {React, useState} from 'react'

const Usestate = () => {

    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1) }
    const decrement = () => { 
        if(count == 0){
            alert("Count is Zero");
        }else{
            setCount(count - 1)
        }
    }



  return (
    <div>
        <h1>No's times {count} clicked. </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>


        {/* <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button> */}

        
      
    </div>
  )
}

export default Usestate


