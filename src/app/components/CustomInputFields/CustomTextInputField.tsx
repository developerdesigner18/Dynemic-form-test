import { textInput } from "@/utils/type";
import React, { useEffect, useState } from "react";

const CustomTextInputField = ({
  fieldData,
  handleMultipleData,
}: {
  fieldData: textInput;
  handleMultipleData: (data: any) => void;
}) => {
  const [data, setData] = useState<string>("");

  const { fieldName, type, value } = fieldData;

  useEffect(() => {
    setData(value);
    handleMultipleData({ [fieldName]: value });
  }, [value]);

  const handleFieldData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData(value);
    handleMultipleData({ [name]: value });
  };

  return (
    <div className="field_holder">
      <label className="label_style">{fieldName}</label>
      <input
        type={type}
        value={data}
        className="input_field"
        name={fieldName}
        onChange={(e) => handleFieldData(e)}
      />
    </div>
  );
};

export default CustomTextInputField;
