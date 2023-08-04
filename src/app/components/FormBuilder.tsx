import React, { useState } from "react";
import { DynamicState, ResponseObject } from "@/utils/type";

import CustomTextInputField from "./CustomInputFields/CustomTextInputField";
import CustomSelectInput from "./CustomInputFields/CustomSelectInput";
import CustomTextAreaInput from "./CustomInputFields/CustomTextAreaInput";

import Button from "@mui/material/Button";

const FormBuilder = ({
  fields,
  isLoading,
}: {
  fields: ResponseObject | null;
  isLoading: boolean;
}) => {
  const [submitData, setSubmitData] = useState<DynamicState>({});

  const [resultData, setResultData] = useState<String>("");

  const handleMultipleData = (object: DynamicState) => {
    setSubmitData((prev) => ({ ...prev, ...object }));
  };

  const handleSubmitData = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    };

    fetch("https://ulventech-react-exam.netlify.app/api/form", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setResultData(JSON.stringify(data));
      })
      .catch((error) => {
        setResultData(`Error : ${error.message}`);
      });
  };

  return (
    <div className="form_holder_style">
      {fields?.data?.length
        ? fields?.data.map((field: any) =>
            ["text", "email", "number"].includes(field.type) ? (
              <CustomTextInputField
                fieldData={field}
                handleMultipleData={handleMultipleData}
              />
            ) : field.type == "select" ? (
              <CustomSelectInput
                fieldData={field}
                handleMultipleData={handleMultipleData}
              />
            ) : field.type == "multiline" ? (
              <CustomTextAreaInput
                fieldData={field}
                handleMultipleData={handleMultipleData}
              />
            ) : null
          )
        : ""}

      {fields?.data?.length && (
        <Button
          onClick={handleSubmitData}
          disabled={isLoading}
          color="secondary"
          variant="contained"
          sx={{ display: "block", margin: "auto" }}
        >
          Submit
        </Button>
      )}

      {resultData !== "" && (
        <p className="result_data">
          RESPONSE: <br /> {resultData}
        </p>
      )}
    </div>
  );
};

export default FormBuilder;
