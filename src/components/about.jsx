// About.jsx
import React from 'react';
import { Box, Typography, Divider, Paper } from '@mui/material';

const About = () => {
  return (
    <Box>
      <Paper sx={{ padding: 3, marginBottom: 3 }} elevation={3}>
        <Typography variant="h4" gutterBottom>
         Lets go Scrumptious!!
        </Typography>
        <Divider />
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6">Introduction</Typography>
          <Typography>
            Finding the balance between satisfying cravings and maintaining a healthy lifestyle is
            an ongoing challenge today. It requires self-awareness, planning, and a willingness to
            make mindful choices in the face of tempting options. By adopting a balanced approach
            to eating, individuals can enjoy their favorite treats while still prioritizing their
            long-term health and well-being.
          </Typography>
          {/* Add more content as needed */}
        </Box>
        <Divider />
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6">Modules</Typography>
          <Typography>
            This app can have a lot of modules involving –
            {/* Add module content here */}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6">Module Operations</Typography>
          <Typography>
            This section describes the operations related to each module.
            {/* Add operation content here */}
          </Typography>
        </Box>
        <Divider />
        
        <Divider />
      </Paper>
    </Box>
  );
};

export default About;
