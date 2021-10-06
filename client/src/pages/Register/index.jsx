import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Signin from "../../components/SignForms/Signin";
import Signup from "../../components/SignForms/signup";
import "./style.css";

function TabPanel(props) {
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

function Register() {
  const [value, setValue] = useState(0);
  axios.get("/products").then(console.log);

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box className="tab-container">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="black"
            indicatorColor="black"
          >
            <Tab
              selected
              selectionFollowsFocus
              label="Register/"
              {...a11yProps(0)}
            />
            <Tab label="Login" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            component="div"
            sx={{
              width: "100%",
              wordBreak: "break-all",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Create a new account. Once you‘ve set it up, you can take
                advantage of many benifits of membership.
              </Typography>

              <Signup />
            </CardContent>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            component="div"
            sx={{
              width: "100%",
              wordBreak: "break-all",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Create a new account. Once you‘ve set it up, you can take
                advantage of many benifits of membership.
              </Typography>

              <Signin />
            </CardContent>
          </Box>
        </TabPanel>
      </Box>
    </>
  );
}

export default Register;
