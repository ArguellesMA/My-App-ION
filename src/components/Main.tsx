import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import RickMorty from '../img/rick-morty.png';

const Main = () => {
 

  return (
    <AppBar position="static" color='default' style={{paddingTop: '1em', paddingBottom: '3em', backgroundColor: '#f8fcfd'}}>
      <Container maxWidth="xs">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flow', md: 'none' } }}></Box>
          <Box sx={{ flexGrow: 1}}>
            <Typography variant="h5" component="div">
                Hola Rick-Morty
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <Avatar alt="Remy Sharp" src={RickMorty} />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Main;
