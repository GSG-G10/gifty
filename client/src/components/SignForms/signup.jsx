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
  const [error, setError] = useState('');
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
            setError('');
            setSuccess(data.msg);
          })
          .catch((err) => {
            setSuccess('');
            setError(err.response.data.Error);
          });
      } else {
        setSuccess('');
        setError('Password and confirm password does not match.');
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError('');
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
          <Snackbar open={Boolean(error)} autoHideDuration={10000} onClose={handleClose}>
          <Alert severity="error">{error}</Alert>
        </Snackbar>
        <Snackbar open={Boolean(success)} autoHideDuration={10000} onClose={handleClose}>
          <Alert severity="success">{success}</Alert>
        </Snackbar>
        </>
  );
}

export default signup;
