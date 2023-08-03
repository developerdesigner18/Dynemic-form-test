"use client";
import React from "react";
import { useGetFormFields } from "@/hooks/useGetFormFields";
import FormBuilder from "./FormBuilder";

const MainFormComponent = () => {
  const { fields, isLoading, error } = useGetFormFields(
    "https://ulventech-react-exam.netlify.app/api/form"
  );

  if (isLoading) return "Loading...";
  if (error) return "Please try Again later...";
  return (
    <div className="main_container">
      <h1 className="project_heading">Dynamic Form</h1>
      <FormBuilder fields={fields} />
    </div>
  );
};

export default MainFormComponent;
