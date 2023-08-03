import { selectInput } from "@/utils/type";
import React, { useEffect, useState } from "react";

const CustomSelectInput = ({
  fieldData,
  handleMultipleData,
}: {
  fieldData: selectInput;
  handleMultipleData: (data: any) => void;
}) => {
  const [data, setData] = useState<string>("");

  const { fieldName, options, value } = fieldData;

  useEffect(() => {
    setData(value);
    handleMultipleData({ [fieldName]: value });
  }, [value]);

  const handleFieldData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setData(value);
    handleMultipleData({ [name]: value });
  };

  return (
    <div className="field_holder">
      <label className="label_style">{fieldName}</label>
      <select
        value={data}
        className="input_field"
        name={fieldName}
        onChange={(e) => handleFieldData(e)}
      >
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelectInput;
