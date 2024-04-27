import { useRef } from "react";

const useCustomEffect = (fn, dependencyArr) => {
  // first render
  const isRendered = useRef(true);
  const prevDepRef = useRef([]);

  if (isRendered.current) {
    isRendered.current = false;
    prevDepRef.current = dependencyArr || [];
    const cleanUp = fn();
    return () => {
      if (cleanUp && typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }

  const depdChanged = dependencyArr
    ? JSON.stringify(prevDepRef.current) !== JSON.stringify(dependencyArr)
    : true;
  console.log("depdChanged", depdChanged);

  if (depdChanged) {
    const cleanUp = fn();
    if (cleanUp && typeof cleanUp === "function") {
      cleanUp();
    }
  }

  prevDepRef.current = dependencyArr || [];
  console.log(prevDepRef.current);
};
export default useCustomEffect;


