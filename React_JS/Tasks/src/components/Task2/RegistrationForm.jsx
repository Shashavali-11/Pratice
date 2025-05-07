import React, { useEffect, useState } from "react";
import FormField from "./FormField";

const RegistrationForm = ({ onSubmit, focusRef }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    hobbies: [""],
  });
  const [errors, setErrors] = useState({});
  //   const hobbyRef = useRef(null);

  useEffect(() => {
    focusRef.current?.focus();
  }, [focusRef]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "hobbies") {
      const updated = [...form.hobbies];
      updated[index] = value;
      setForm({ ...form, hobbies: updated });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const addHobby = () => setForm({ ...form, hobbies: [...form.hobbies, ""] });

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email format is invalid";
    if (!form.age || isNaN(form.age) || form.age <= 10)
      newErrors.age = "Age must be a number > 18";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(form);
      setForm({ name: "", email: "", age: "", hobbies: [""] });
    }
  };

//   const deleteHobby = (index) => {
//     const updated = [...form.hobbies];
//     updated.splice(index, 1);
//     setForm({ ...form, hobbies: updated });
//   };

  return (
    <form onSubmit={handleSubmit}>
      <FormField  error={errors.name}>
        <label ><b>Name : </b></label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          ref={focusRef}
        />
      </FormField>

      <FormField error={errors.email}>
        <label ><b>Email : </b></label>
        <input name="email" value={form.email} onChange={handleChange} />
      </FormField>

      <FormField error={errors.age}>
        <label ><b>Age : </b></label>
        <input name="age" value={form.age} onChange={handleChange} />
      </FormField>

      <FormField label="Hobbies:">
        {/* <label ><b>Hobbies : </b></label> */}
        {form.hobbies.map((hobby, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <label style={{ marginRight: "8px" }}>Hobby {index + 1}:</label>
            <input
              name="hobbies"
              value={hobby}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        ))}


        {/* Delete button beside the Hobby field */}
        {/* {form.hobbies.map((hobby, index) => (
          <div
            key={index}
            style={{
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label style={{ marginRight: "8px", minWidth: "70px" }}>
              Hobby {index + 1}:
            </label>
            <input
              name="hobbies"
              value={hobby}
              onChange={(e) => handleChange(e, index)}
              style={{ flex: 1, marginRight: "8px" }}
            />
            {form.hobbies.length > 1 && (
              <button
                type="button"
                onClick={() => deleteHobby(index)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                }}
              >
                Delete
              </button>
            )}
          </div>
        ))} */}

        <button type="button" onClick={addHobby}>
          Add Hobby
        </button>
      </FormField>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
