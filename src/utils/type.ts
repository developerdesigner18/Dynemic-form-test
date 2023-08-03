type FieldOption = string[];

interface ResponseData {
  fieldName: string;
  type: "text" | "select";
  value: string;
  options?: FieldOption;
}

export interface ResponseObject {
  success: boolean;
  message: string;
  data: ResponseData[];
}

export interface textInput {
  fieldName: string;
  type: string;
  value: string;
}

export interface selectInput {
  fieldName: string;
  type: string;
  value: string;
  options: string[];
}
