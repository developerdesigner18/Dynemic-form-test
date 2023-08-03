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
