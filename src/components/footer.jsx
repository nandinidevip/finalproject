// Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FancyFooter = styled(Box)({
  backgroundColor: '#008080', // Teal color
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
});

const Footer = () => {
  return (
    <FancyFooter>
      <Typography variant="body2">
        © {new Date().getFullYear()} All rights reserved.
      </Typography>
    </FancyFooter>
  );
};

export default Footer;
