import React, { useCallback } from "react";

export const TabTitle = ({ title, isActiveTab, index, setSelectedTab }) => {
  const handleSelectTab = useCallback(() => {
    setSelectedTab(index);
  }, [index, setSelectedTab]);
  return (
    <>
      <li
        className={`title-item ${isActiveTab ? "active" : ""}`}
        onClick={handleSelectTab}
      >
        {title}
      </li>
    </>
  );
};
