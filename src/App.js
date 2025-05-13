
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

export default function Types() {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: '100%', maxWidth: 500 ,margin: 'auto',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      
      <Typography variant="h3" gutterBottom>
        Go to the story here.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/storypage')}>
        GO
      </Button>
        
      
     
    </Box>
  );
}
