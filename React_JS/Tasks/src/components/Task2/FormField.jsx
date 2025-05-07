import React from "react";

const FormField = ({ label, children, error }) => (
  <div style={{ marginBottom: "10px" }}>
    <label><strong>{label}</strong></label><br />
    {children}
    {error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);

export default FormField;
