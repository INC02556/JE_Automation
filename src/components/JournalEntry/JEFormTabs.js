import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BsFileEarmarkText } from "react-icons/bs";
import JEInputs from "./JEInputs";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const JEFormTabs = ({setTablleRow}) => {
  //   const [activeTab, setActiveTab] = useState("tab1");
  
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   const handleTabClick = (tabName) => {
  //     setActiveTab(tabName);
  //   };

  return (
    <div className="mx-4 border-2 rounded-md">
      <Box sx={{ width: "100%" }}>
      <Box className="border-b-2 shadow-sm rounded-md ">
          <Tabs 
            className="mx-4"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#3026B9", 
                },
                "& .MuiTab-textColorPrimary":{
                    color:"#3026B9"
                },
                "& .Mui-selected":{
                  color:"#3026B9"
                }
              }}
          >
            <Tab
              label="Request Type"
              {...a11yProps(0)}
              sx={{ textTransform: "capitalize",fontWeight: 900, color: "#3026B9",fontSize: "1.1rem",
              lineHeight: "2rem", display: "flex" }}
              iconPosition="start"
              icon={<BsFileEarmarkText className="text-2xl text-[#3026B9]" />}
            />
            {/* <Tab label="Item Two" {...a11yProps(1)} sx={{textTransform:'capitalize'}}/> */}
            {/* <Tab label="Item Three" {...a11yProps(2)} sx={{textTransform:'capitalize'}}/> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <JEInputs setTablleRow={setTablleRow}/>
        </CustomTabPanel>
        {/* <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
      </Box>
    </div>
  );
};

export default JEFormTabs;
