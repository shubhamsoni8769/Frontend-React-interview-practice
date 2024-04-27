import { useEffect, useRef, useState } from "react";

export const useThrottle = (val, delay) => {
  const [throttleVal, setThrottlVal] = useState(val);
  console.log(throttleVal, "In hook");

  const lastExecutedTime = useRef(null);

  useEffect(() => {
    if (!lastExecutedTime.current) {
      setThrottlVal(val);
      lastExecutedTime.current = Date.now();
      return;
    }

    const timerId = setTimeout(() => {
      if (Date.now() - lastExecutedTime.current >= delay) {
        setThrottlVal(val);
        lastExecutedTime.current = Date.now();
      }
    }, delay - (Date.now() - lastExecutedTime.current));
    return () => clearTimeout(timerId);
  }, [val, delay]);
  return throttleVal;
};
