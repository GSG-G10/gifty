import { useState } from 'react';
import {
  Button, TextField, Box, Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import './style.css';

function Signin() {
  const [error, setError] = useState('');
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
            setSuccess('');
            setError(data.Error);
          } else {
            setError('');
            setSuccess(data.msg);
          }
        })
        .catch(() => {
          setSuccess('');
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
    setError('');
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
      <Snackbar open={Boolean(error)} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <Snackbar open={Boolean(success)} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="success">{success}</Alert>
      </Snackbar>
    </>
  );
}

export default Signin;
