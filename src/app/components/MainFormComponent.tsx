"use client";
import React from "react";

import { useGetFormFields } from "@/hooks/useGetFormFields";

import FormBuilder from "./FormBuilder";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const MainFormComponent = () => {
  const { fields, isLoading, error } = useGetFormFields(
    process.env.NEXT_PUBLIC_BACKEND_URL || ""
  );

  if (isLoading) return "Loading...";
  if (error) return "Please try Again later...";
  return (
    <div className="main_container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar></Toolbar>
        </AppBar>
      </Box>
      <p className="project_heading">Dynamic Form</p>
      <FormBuilder fields={fields} isLoading={isLoading} />
    </div>
  );
};

export default MainFormComponent;
