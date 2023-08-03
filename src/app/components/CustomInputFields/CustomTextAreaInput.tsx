import { textInput } from "@/utils/type";
import React from "react";

const CustomTextAreaInput = ({ fieldData }: { fieldData: textInput }) => {
  const { fieldName, value } = fieldData;
  return (
    <div className="field_holder">
      <label className="label_style">{fieldName}</label>
      <textarea value={value} className="input_field" rows={5} />
    </div>
  );
};

export default CustomTextAreaInput;
