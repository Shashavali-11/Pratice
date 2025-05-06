import React from 'react'
import Counter from './Counter';

const Form = () => {
    function handleSubmit(e){
        e.preventDefault();
        console.log("Submit Clicked. ")

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* <button type='submit' >Submit</button> */}
            {<Counter />}
        </form>
        
      
    </div>
  )
}

export default Form
