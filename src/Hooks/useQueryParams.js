import { useSearchParams } from "react-router-dom";

const useQueryParams = (key) => {
  let [searchParams, setSearchParams] = useSearchParams();
  return { id: searchParams.get(key || "id"), setSearchParams };
};

export default useQueryParams;

// useSearchParams hook is used to read and modify the query string in the URL for the current location.
