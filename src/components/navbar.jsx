// NavBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, styled,TextField, IconButton} from '@mui/material';

const FancyAppBar = styled(AppBar)({
  backgroundColor: '#008080', // Teal color
});

const FancyTypography = styled(Typography)({
  fontFamily: 'cursive', // Change this to your desired fancy font
  color: 'white', // Font color
});

const NavBar = () => {
  return (
    <FancyAppBar position="static">
      <Toolbar>
        <FancyTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Let's Go Scrumptious
        </FancyTypography>
        {/* Add more components or icons if needed */}
      </Toolbar>
    </FancyAppBar>
  );
};

export default NavBar;
