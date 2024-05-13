import { useEffect, useState } from "react";
export const useDebounce = (searchVal, delay = 1) => {
  const [val, setVal] = useState("");
  console.log(searchVal);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVal(searchVal);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchVal, delay]);
  console.log("useDebounec called", val);

  return val
};