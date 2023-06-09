export default `import React, { useState } from "react";
import { nanoid } from "nanoid";

import useAttributes from "../../../hook/useAttributes";

type Tab = {
  id: number;
  label: string;
  content: string;
  panelId: string;
};

type Styles = {
  container?: string;
  childContainer?: string;
  tabs?: string;
  activeTabs?: string;
  tabpanelContainer?: string;
  tabpanels?: string;
};

const Tabs = ({ tabs, style }: { tabs: Pick<Tab, "content" | "label">[]; style: Styles }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const _tabs: Tab[] = tabs.map((tab, index) => ({
    ...tab,
    id: index,
    panelId: nanoid(),
  }));

  const getAttributes = useAttributes(activeTab);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className={style?.container}>
      <div className={style?.childContainer} role="tablist">
        {_tabs.map((tab) => {
          const { selected, tabIndex } = getAttributes(tab.id);
          return (
            <button
              key={tab.id}
              className={\`\${activeTab === tab.id ? style?.activeTabs || "" : ""} \${style?.tabs || ""}\`}              role="tab"
              aria-selected={selected}
              aria-controls={tab.panelId}
              onClick={() => handleTabClick(tab.id)}
              tabIndex={tabIndex}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className={style?.tabpanelContainer}>
        {_tabs.map((tab) => {
          const { tabIndex } = getAttributes(tab.id);
          return (
            activeTab === tab.id && (
              <div key={tab.id} id={tab.panelId} role="tabpanel" className={style?.tabpanels} tabIndex={tabIndex}>
                {tab.content}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
`;
