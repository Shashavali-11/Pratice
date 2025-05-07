import React, { useRef, useState } from "react";
import RegistrationForm from "./RegistrationForm";
import './T2.css';


const Task_2 = () => {
  const nameInputRef = useRef(null);
  const [formData, setFormData] = useState();

  const handleFormSubmit = (data) => {
    setFormData(data);
    console.log("Submitted Data:" );
    console.log(data)
  };

  return (
    <>
      <h2>Registration Form</h2>
      <RegistrationForm onSubmit={handleFormSubmit} focusRef={nameInputRef} />



      { <pre>{JSON.stringify(formData, null, 2)}</pre>}
      {/* <p>{JSON.stringify(formData, null, 2)}</p> */}
    
    </>
  );
};

export default Task_2;
