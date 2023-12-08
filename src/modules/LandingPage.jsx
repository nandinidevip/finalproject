// LandingPage.jsx
import React from 'react';
import { Grid, Box, Typography, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginForm from './loginform';
import logoimage from '../assets/Collage.jpg';

const fadeInAnimation = {
  animation: 'fadeIn 1s',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};

const StyledBox = styled(Box)(fadeInAnimation);

const Logo = styled('img')({
  width: '500px',
  height: 'auto',
  marginBottom: '16px',
});

const GetStartedButton = styled(Button)({
  transition: 'background-color 0.3s ease-in-out',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#1976D2',
  },
});

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/recipe');
  };

  return (
    <Grid container justifyContent="space-evenly" alignItems="center"  >
      <Grid item xs={6}>
        {/* Left column with logo and "Get Started" */}
        <StyledBox textAlign="center">
          <Logo src={logoimage} alt="Logo" />
          <Typography variant="h4" mb={4} fontWeight="bold">
            Let's Go Scrumptious
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" mb={4} fontWeight="bold">
            Discover a world of delicious recipes at your fingertips.
          </Typography>
          <GetStartedButton variant="contained" color="primary" onClick={handleGetStarted}>
            Get Started
          </GetStartedButton>
        </StyledBox>
      </Grid>
      <Grid item xs={6}>
        {/* Right column with login form */}
        <StyledBox textAlign="center">
          <LoginForm />
        </StyledBox>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
