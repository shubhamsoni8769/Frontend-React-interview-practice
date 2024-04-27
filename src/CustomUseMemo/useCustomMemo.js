import { useEffect, useRef } from "react";

const useCustomMemo = (fn, dependencyArr) => {
  // console.log("useCustomMemo called");

  // varibale for cache value
  const memoizedRef = useRef(null);
  console.log(memoizedRef);

  const areDepEqual = (prevDep, currentDep) => {
    if (!prevDep) return false;
    if (prevDep.length !== currentDep.length) return false;
    for (let i = 0; i < prevDep.length; i++) {
      if (prevDep[i] !== currentDep[i]) return false;
    }

    return true;
  };
  // find change in dependency
  if (
    !memoizedRef.current ||
    !areDepEqual(memoizedRef.current.dependencyArr, dependencyArr)
  ) {
    memoizedRef.current = {
      value: fn(),
      dependencyArr,
    };
  }
  // cleanup logic

  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);
  // return memoized value
  return memoizedRef.current.value;
};

export default useCustomMemo;
