import { selectInput } from "@/utils/type";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

  const handleFieldData = (e: SelectChangeEvent) => {
    const { value, name } = e.target;
    setData(value);
    handleMultipleData({ [name]: value });
  };

  return (
    <div className="field_holder">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {fieldName.toUpperCase()}
        </InputLabel>
        <Select
          value={data}
          label={fieldName.toUpperCase()}
          onChange={handleFieldData}
          color="secondary"
        >
          {options.map((opt) => (
            <MenuItem value={opt}>{opt}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelectInput;
