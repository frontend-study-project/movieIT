import { Box, Tab, Tabs } from "@mui/material";
import styled from "./tab.module.css";
import { useEffect, useState } from "react";

const TabPannel = ({ menuArr }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      {menuArr ? 
      <Box width={1200} p={2}>
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
              <Tabs
                value={currentTab}
                onChange={handleTabsChange}
              >
                {menuArr.map((item , index) => {
                 return(
                <Tab sx={{ px: 10 }} label={item.label} key={item.value} value={item.id}
                  style={ currentTab == index ? { fontWeight: "bold" } : { fontWeight: "normal" }}
                  className={`${styled.submenu} ${currentTab === index ? styled.focused : ""}`}
                  />
                 )   
                })}
              </Tabs>
              <Box padding={2}>{menuArr[currentTab].content}</Box>          
        </Box>
        
      </Box> : null}
    </>
  );
};
export default TabPannel;
