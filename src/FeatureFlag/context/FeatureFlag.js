import React, { createContext, useContext, useEffect, useState } from "react";

export const FeatureFlag = createContext({});

export const FeatureFlagProvider = ({ children }) => {
  const [features, setFeatures] = useState({});

  useEffect(() => {
    setTimeout(() =>{
        setFeatures({ gpay: true, isApplePay: false })
    },3000)
  },[])

  return (
    <FeatureFlag.Provider value={{ features }}> {children}</FeatureFlag.Provider>
  );
};


