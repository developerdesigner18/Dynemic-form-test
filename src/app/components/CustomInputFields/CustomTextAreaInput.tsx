import { textInput } from "@/utils/type";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

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
      <FormControl fullWidth>
        <TextField
          label={fieldName.toUpperCase()}
          multiline
          rows={5}
          value={data}
          name={fieldName}
          color="secondary"
          onChange={handleFieldData}
        />
      </FormControl>
    </div>
  );
};

export default CustomTextAreaInput;
