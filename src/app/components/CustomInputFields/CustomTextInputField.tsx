import React, { useEffect, useState } from "react";
import { textInput } from "@/utils/type";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

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
      <FormControl fullWidth>
        <TextField
          type={type}
          color="secondary"
          value={data}
          name={fieldName}
          onChange={handleFieldData}
          label={fieldName.toUpperCase()}
        />
      </FormControl>
    </div>
  );
};

export default CustomTextInputField;
