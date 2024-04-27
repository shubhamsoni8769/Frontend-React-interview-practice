import React from "react";
import { TabPans, Tabs } from "./Tabs";

export const TabsExample = () => {
  return (
    <Tabs>
      <TabPans title="Basic">
        <div>This is basic version</div>
      </TabPans>
      <TabPans title="Standered">
        <div>This is Standered version</div>
      </TabPans>
      <TabPans title="Premium">
        <div>This is premium version</div>
      </TabPans>
    </Tabs>
  );
};
