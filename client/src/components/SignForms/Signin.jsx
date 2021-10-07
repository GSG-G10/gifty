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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    if (password && email) {
      e.preventDefault();
      axios
        .post('/signin', {
          email,
          password,
        })
        .then((response) => response.data)
        .then((data) => {
          setError('');
          setSuccess(data.msg);
        })
        .catch((err) => {
          setSuccess('');
          setError(err.response.data.Error);
        });
    }
  };

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );
  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
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
            value={email}
            name='email'
            onChange={handleChange}
          />
          <TextField
            required
            id="standard-email-input"
            label="Password"
            type="password"
            value={password}
            fullWidth
            name='password'
            variant="outlined"
            onChange={handleChange}
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
