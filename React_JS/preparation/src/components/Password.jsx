import React, { useState } from "react";

function Password() {
  const [showPassword, setShowPassword] = useState(false);
  
  return(
    <>
        <input type={showPassword ? "text" : "password"} placeholder="Enter Password"  /> <br />
        <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"} Password
        </button>   
    </>
  )

}
export default Password;
