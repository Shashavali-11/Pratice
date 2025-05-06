import React, { useState } from "react";

function DynamicFields() {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  };

  const handleAdd = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleRemove = (i) => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl mb-4">Dynamic Input Fields</h2>
      {fields.map((field, i) => (
        <div key={i} className="flex mb-2">
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(i, e)}
            className="flex-1 border px-3 py-2"
          />
          <button onClick={() => handleRemove(i)} className="ml-2 text-red-500">Remove</button>
        </div>
      ))}
      <button onClick={handleAdd} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
        Add Field
      </button>
    </div>
  );
}
export default DynamicFields;
