// NavigationBar.jsx
import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const WhiteBackgroundAppBar = styled(AppBar)({
  backgroundColor: '#fff', // Set the background color to white
});

const BoldStyledTab = styled(Tab)({
  textTransform: 'none', // Keep tab text in lowercase
  fontSize: '18px', // Set the font size to 18px or adjust as needed
  fontWeight: 'bold', // Make the font bold
  '&:hover': {
    backgroundColor: '#f0f0f0', // Change to your desired hover background color
  },
});

const NavigationTabs = styled(Tabs)({
  flexGrow: 1,
});

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <WhiteBackgroundAppBar position="static">
      <NavigationTabs>
        <BoldStyledTab label="Home" onClick={() => handleTabClick('/')} />
        <BoldStyledTab label="Recipes" onClick={() => handleTabClick('/recipe')} />
        <BoldStyledTab label="About" onClick={() => handleTabClick('/about')} />
        {/* Add more tabs as needed */}
      </NavigationTabs>
    </WhiteBackgroundAppBar>
  );
};

export default NavigationBar;
