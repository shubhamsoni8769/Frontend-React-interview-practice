import { useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

export const Throttling = () => {
  const [val, setval] = useState("");
  const throttleVal = useThrottle(val,3000);

  useEffect(() => {
    console.log("Throttled Val", throttleVal);
  }, [throttleVal]);

  return (
    <div>
      <input
        placeholder="type here..."
        onChange={(e) => setval(e.target.value)}
      />
    </div>
  );
};
