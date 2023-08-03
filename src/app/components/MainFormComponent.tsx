"use client";
import { useGetFormFields } from "@/hooks/useGetFormFields";
import React from "react";

const MainFormComponent = () => {
  const { fields, isLoading, error } = useGetFormFields(
    "https://ulventech-react-exam.netlify.app/api/form"
  );

  console.log(fields);

  if (isLoading) return "Loading...";
  if (error) return "Please try Again later...";
  return (
    <div>
      <h1>Dynamic Form</h1>
    </div>
  );
};

export default MainFormComponent;
