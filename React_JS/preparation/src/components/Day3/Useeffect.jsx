import {React, useState, useEffect } from 'react'

const Useeffect = () => {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     if(count > 0){
    //         console.log("Component Mounted", count);
    //     }
    // }, [count])

    useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);

    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div>
        <h1>HELLO SHASHA..!</h1>
        <h1>No's times {count} clicked. </h1>

        {/* <button onClick={() => setCount(count + 1)}>CLick</button> */}



      
    </div>
  )
}

export default Useeffect
