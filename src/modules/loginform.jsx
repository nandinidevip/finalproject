// LoginForm.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, styled } from '@mui/material';
import userCredentials from '../usercredentials.json';
import GoogleLogin from 'react-google-login';

const fadeInAnimation = {
  animation: 'fadeIn 1s',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};


const StyledBox = styled(Box)(fadeInAnimation);



const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateInput = () => {
    // Simple validation example; you may want to implement more complex validation logic
    if (!userId || !fullName || !lastName || !email || !contactNo || !username || !password) {
      setError('Please fill in all fields');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = () => {
    if (!validateInput()) {
      return;
    }

    const user = userCredentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (user) {
      // Authentication successful
      console.log('Login successful. User type:', user.usertype);
      setError('');
    } else {
      // Authentication failed
      setError('Invalid username or password');
    }
  };

  const responseGoogle = (response) => {
    // Handle the Google login response
    console.log(response);
    // You can use the response to authenticate the user on your server
  };

  return (
    <StyledBox>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Login
      </Typography>
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <TextField
        label="User ID"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <TextField
        label="Full Name"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        label="Last Name"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Contact Number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={contactNo}
        onChange={(e) => setContactNo(e.target.value)}
      />
    
      <TextField
        label="Password"
        required
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} fontWeight="bold">
        Login
      </Button>
      <Box mt={2} />
      {/* Google Login Button */}
      <GoogleLogin
        clientId="1058664016799-bsen6pr77dkmrm1ku917ahvlngtmcqf7.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </StyledBox>
  );
};

export default LoginForm;
