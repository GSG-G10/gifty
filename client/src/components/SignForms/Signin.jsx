import { useState } from 'react';
import {
  Button, TextField, Box, Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import './style.css';

function Signin() {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [success, setSuccess] = useState('');
  const [values, setValues] = useState({ password: '', email: '' });

  const handleSubmit = (e) => {
    if (values.password && values.email) {
      e.preventDefault();
      axios
        .post('/signin', {
          email: values.email,
          password: values.password,
        })
        .then((response) => response.data)
        .then((data) => {
          if (data.Error) {
            setIsSuccess(false);
            setSuccess('');
            setIsError(true);
            setError(data.Error);
          } else {
            setIsError(false);
            setError('');
            setIsSuccess(true);
            setSuccess(data.msg);
          }
        })
        .catch(() => {
          setIsSuccess(false);
          setSuccess('');
          setIsError(true);
          setError('Error');
        });
    }
  };

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsError(false);
  };

  return (
    <>
      <Box className="form-container">
        <form className='form' onSubmit={handleSubmit}>
          <TextField
            required
            id="standard-email-input"
            label="Email"
            fullWidth
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange('email')}
          />
          <TextField
            required
            id="standard-email-input"
            label="Password"
            type="password"
            value={values.password}
            fullWidth
            variant="outlined"
            onChange={handleChange('password')}
          />
          <Button
            size="larg"
            variant="contained"
            type="submit"
            className="button-block"
            onClick={handleSubmit}
            fullWidth
            style={{
              background: '#D3D3D3',
              color: 'black',
              fontSize: '3rem',
              fontWeight: '700',
              marginTop: '4%',
              padding: '2.5vh',
            }}
          >
            Log IN
          </Button>
        </form>
      </Box>
      <Snackbar open={isError} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <Snackbar open={isSuccess} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="success">{success}</Alert>
      </Snackbar>
    </>
  );
}

export default Signin;
