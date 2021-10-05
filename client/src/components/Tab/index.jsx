import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SendIcon from "@mui/icons-material/Send";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import "./style.css";
import rateImg from "./rate.png";

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

function TabComponent({ description, productId }) {
  const [value, setValue] = useState(0);
  const [addComment, setAddComment] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  useEffect(() => {
    axios
      .get(`/comments/${productId}`)
      .then((response) => response.data)
      .then((data) => {
        setComments(data);
      })
      .catch(() => setError(true));
  }, []);

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
  const sendComment = () => {
    console.log(addComment);
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
              label="Description"
              {...a11yProps(0)}
            />
            <Tab label="Reviews" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Card
            component="div"
            sx={{
              width: "100%",
              wordBreak: "break-all",
              backgroundColor: "#FAF6FF",
              height: "100%",
              padding: "20px",
            }}
          >
            {description}
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card
            component="div"
            sx={{
              width: "100%",
              wordBreak: "break-all",
              backgroundColor: "#FAF6FF",
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "2vh",
            }}
          >
            <InputBase
              style={{ width: "90%" }}
              placeholder="Add a Comments"
              value={addComment}
              onChange={(e) => setAddComment(e.target.value)}
            />
            <SendIcon style={{ cursor: "pointer" }} onClick={sendComment} />
          </Card>
          {comments.length
            ? comments.map((elem) => {
                return (
                  <Card
                    sx={{
                      backgroundColor: "#FAF6FF",
                      marginBottom: "2vh",
                    }}
                  >
                    <CardContent
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <Box
                        style={{
                          width: "80%",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: 12 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Word of the Day
                        </Typography>
                        <Typography variant="h7">{elem}</Typography>
                      </Box>
                      <Typography style={{ width: "10%" }}>
                        <img src={rateImg} />
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })
            : null}
        </TabPanel>
      </Box>
      <Snackbar open={error} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="error">An Error Occurred!</Alert>
      </Snackbar>
    </>
  );
}

export default TabComponent;
