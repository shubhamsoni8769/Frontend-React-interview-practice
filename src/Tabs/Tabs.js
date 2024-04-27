import { useState } from "react";
import { TabTitle } from "./TabTitle";
import React from "react";
import "./style.css";

export const Tabs = ({ prevTabIndex = 0, children }) => {
  const [selectedTab, setSelectedTab] = useState(prevTabIndex);
  console.log(children[0]);
  return (
    <>
      <ul className="tab-title">
        {children.map((tab, index) => {
          return (
            <TabTitle
              key={tab.props.title + index}
              title={tab.props.title}
              index={index}
              isActiveTab={selectedTab === index}
              setSelectedTab={setSelectedTab}
            />
          );
        })}
      </ul>
      {children[selectedTab]}

      <div className="parent">
        <div className="child1"> child2</div>
        <div className="child2"> child 1</div>
      </div>
    </>
  );
};

export const TabPans = ({ children }) => {
  return <div className="tab-pans">{children}</div>;
};
