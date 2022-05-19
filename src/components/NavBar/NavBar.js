import * as React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Cart from '../Cart/Cart';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Sigma HR - Consultora de Recursos Humanos
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Nosotros</Button>
              <Button color="inherit">Servicios</Button>
              <Cart/>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default NavBar