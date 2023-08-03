import React from "react";
import { ResponseObject } from "@/utils/type";

import CustomTextInputField from "./CustomInputFields/CustomTextInputField";
import CustomSelectInput from "./CustomInputFields/CustomSelectInput";
import CustomTextAreaInput from "./CustomInputFields/CustomTextAreaInput";

const FormBuilder = ({ fields }: { fields: ResponseObject | null }) => {
  return (
    <div className="form_holder_style">
      {fields?.data?.length
        ? fields?.data.map((field: any) =>
            ["text", "email", "number"].includes(field.type) ? (
              <CustomTextInputField fieldData={field} />
            ) : field.type == "select" ? (
              <CustomSelectInput fieldData={field} />
            ) : field.type == "multiline" ? (
              <CustomTextAreaInput fieldData={field} />
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
