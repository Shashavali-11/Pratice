import React, { useEffect, useRef, useState } from 'react'

function FocusInput() {
    
    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function handleBtn(){
        setInputValue(inputRef.current.value)
    }

    function handleKeyDown(e){
        if(e.key === 'Enter'){
            handleBtn()
        }
    }


  return (
    <div>

        <input ref={inputRef} type="text" onKeyDown={handleKeyDown} />
        <button onClick={handleBtn}>Click</button>

        <p>{inputValue}</p>
        {/* <li>{inputRef}</li> */}
      
    </div>
  )
}

export default FocusInput
