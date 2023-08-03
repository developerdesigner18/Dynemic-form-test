import { textInput } from "@/utils/type";
import React, { useEffect, useState } from "react";

const CustomTextAreaInput = ({
  fieldData,
  handleMultipleData,
}: {
  fieldData: textInput;
  handleMultipleData: (data: any) => void;
}) => {
  const [data, setData] = useState<string>("");

  const { fieldName, value } = fieldData;

  useEffect(() => {
    setData(value);
    handleMultipleData({ [fieldName]: value });
  }, [value]);

  const handleFieldData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setData(value);
    handleMultipleData({ [name]: value });
  };

  return (
    <div className="field_holder">
      <label className="label_style">{fieldName}</label>
      <textarea
        value={data}
        className="input_field"
        rows={5}
        name={fieldName}
        onChange={(e) => handleFieldData(e)}
      />
    </div>
  );
};

export default CustomTextAreaInput;
