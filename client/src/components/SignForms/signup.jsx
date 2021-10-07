import { useState } from 'react';
import {
  Button, TextField, Box, Snackbar,
} from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import './style.css';

function signup() {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [success, setSuccess] = useState('');
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPssword] = useState('');
  const [role, setRole] = useState('Customer');

  const submit = (e) => {
    if (password && email && username && confirmPassword) {
      e.preventDefault();
      if (password === confirmPassword) {
        axios.post('/signup', {
          username,
          email,
          password,
          confirmPassword,
          role,
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
      } else {
        setIsSuccess(false);
        setSuccess('');
        setIsError(true);
        setError('Password and confirm password does not match.');
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsError(false);
  };
  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  return (
      <>
    <Box className="Form">
    <form >
      <TextField className='input' required variant="outlined" fullWidth type="text" label="User Name" id="fullWidth" onChange={(event) => setName(event.target.value)} />
      <TextField className='input' required variant="outlined" fullWidth type="email" label="Email" id="fullWidth" onChange={(event) => setEmail(event.target.value)} />
      <TextField className='input' required variant="outlined" fullWidth type="password" label="Password" id="fullWidth" onChange={(event) => setPassword(event.target.value)} />
      <TextField className='input' required variant="outlined" fullWidth type="password" label="Confirm Password" id="fullWidth" onChange={(event) => setConfirmPssword(event.target.value)} />
      <RadioGroup defaultValue='Customer' onChange={(e) => setRole(e.target.value)} style={{ display: 'flex', justifyContent: 'space-between', padding: 2 }} row aria-label="gender" name="row-radio-buttons-group">
      <label>Are you a:  </label>
      <div>
        <FormControlLabel value="Seller" control={<Radio />} label="Seller" />
        <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
        </div>
      </RadioGroup>
      <Button type="submit" variant="contained" fullWidth onClick={submit} style={{
        background: '#D3D3D3',
        fontSize: '1.5rem',
        fontWeight: '600',
        marginTop: '3%',
        padding: '2.2vh',
      }} > Sign Up</Button>
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

export default signup;
