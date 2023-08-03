import React, { useState } from "react";
import { DynamicState, ResponseObject } from "@/utils/type";

import CustomTextInputField from "./CustomInputFields/CustomTextInputField";
import CustomSelectInput from "./CustomInputFields/CustomSelectInput";
import CustomTextAreaInput from "./CustomInputFields/CustomTextAreaInput";

const FormBuilder = ({ fields }: { fields: ResponseObject | null }) => {
  const [submitData, setSubmitData] = useState<DynamicState>({});

  const handleMultipleData = (object: DynamicState) => {
    setSubmitData((prev) => ({ ...prev, ...object }));
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
        <button className="submit_button">Submit</button>
      )}
    </div>
  );
};

export default FormBuilder;
