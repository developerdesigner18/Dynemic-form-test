import { textInput } from "@/utils/type";
import React from "react";

const CustomTextInputField = ({ fieldData }: { fieldData: textInput }) => {
  const { fieldName, type, value } = fieldData;

  return (
    <div className="field_holder">
      <label className="label_style">{fieldName}</label>
      <input type={type} value={value} className="input_field" />
    </div>
  );
};

export default CustomTextInputField;
