import React from "react";
import { TabContainer, BoxNone, UlNavigation, BtnNavigation } from "./index";
import Theme from "../../Theme/Theme";
const Tab = ({ tab }) => {
  return (
    <TabContainer>
      <p>{tab.text}</p>
      {!tab.text && <BoxNone>This Portfolio Does Not Have {tab.name}!</BoxNone>}
    </TabContainer>
  );
};

const Navigation = (props) => {
  return (
    <UlNavigation>
      {props.tabs.map((item) => (
        <li key={item.id}>
          <BtnNavigation
            className={`${props.activeTabId === item.id ? "active" : ""}`}
            onClick={() => props.onNavClick(item.id)}
          >
            {item.name}
          </BtnNavigation>
        </li>
      ))}
    </UlNavigation>
  );
};

const Tabs = (props) => {
  const [activeTabId, setActiveTab] = React.useState(props.tabs[0].id);

  const activeTab = React.useMemo(
    () => props.tabs.find((tab) => tab.id === activeTabId),
    [activeTabId, props.tabs]
  );

  return (
    <Theme>
      <div>
        <Navigation
          tabs={props.tabs}
          onNavClick={setActiveTab}
          activeTabId={activeTabId}
        />
        <Tab tab={activeTab} />
      </div>
    </Theme>
  );
};

export default Tabs;
