import { useEffect, useState } from "react";
import apiClint from "../services/api-clint";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLodaing] = useState(false);
  //
  useEffect(
    () => {
      //
      const controllr = new AbortController();
      //
      setLodaing(true);
      //
      apiClint
        .get<FetchResponse<T>>(endpoint, {
          signal: controllr.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLodaing(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLodaing(false);
        });

      return () => controllr.abort();
    },
    deps ? [...deps] : []
  );

  return { isLoading, data, error };
};

export default useData;
