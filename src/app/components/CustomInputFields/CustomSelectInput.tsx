import { selectInput } from "@/utils/type";
import React from "react";

const CustomSelectInput = ({ fieldData }: { fieldData: selectInput }) => {
  const { fieldName, options, value } = fieldData;
  return (
    <div className="field_holder">
      <label className="label_style">{fieldName}</label>
      <select value={value} className="input_field">
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelectInput;
