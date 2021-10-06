import React, { useState } from "react";
import { Button, TextField, Box } from "@material-ui/core";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";

import "./style.css";

function Signin() {
  const [error, setError] = useState(false);
  const [values, setValues] = useState({ password: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/signin", {
        email: values.email,
        password: values.password,
      })
      .then((response) => response.data)
      .then((data) => {
        setValues({ password: "", email: "" });
        console.log(data);
      })
      .catch((err) => console.log(err))
      .catch(() => setError(true));
  };

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  return (
    <>
      <Box className="form-container">
        <form onSubmit={handleSubmit}>
          <TextField
            required
            id="standard-email-input"
            label="Email"
            fullWidth
            type="email"
            variant="outlined"
            onChange={handleChange("email")}
          />
          <TextField
            required
            id="standard-email-input"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={handleChange("password")}
          />

          <Button
            size="larg"
            variant="contained"
            type="submit"
            className="button-block"
            fullWidth
            style={{
              background: "#D3D3D3",
              fontSize: "1.5rem",
              fontWeight: "600",
              marginTop: "4%",
              padding: "2.5vh",
            }}
          >
            Log IN
          </Button>
        </form>
      </Box>
      <Snackbar open={error} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="error">An Error Occurred!</Alert>
      </Snackbar>
    </>
  );
}

export default Signin;
