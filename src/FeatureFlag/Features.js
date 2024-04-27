import React, { useContext } from "react";
import { FeatureFlag, FeatureFlagProvider } from "./context/FeatureFlag";

export const Example = () => {
  return (
    <>
      <Feature feature="gpay"> Gpay</Feature>
      <Feature feature="isApplePay">Apple Pay</Feature>
    </>
  );
};

const Feature = ({ feature, children }) => {
  const { features } = useContext(FeatureFlag);
  return <>{features[feature] ? children : null}</>;
};

export const FeatureFlagComponent = () => {
  return (
    <FeatureFlagProvider>
      <Example/>
    </FeatureFlagProvider>
  )
} 
