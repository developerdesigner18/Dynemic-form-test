import { useEffect, useState } from "react";
import { ResponseObject } from "@/utils/type";

export const useGetFormFields = (url: string) => {
  const [fields, setFields] = useState<ResponseObject | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        setFields(await response.json());
        setIsLoading(false);
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { fields, isLoading, error };
};
