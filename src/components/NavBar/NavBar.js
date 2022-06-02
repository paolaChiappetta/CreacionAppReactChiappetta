import * as React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Cart from '../Cart/Cart';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Logo/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Sigma HR - Consultora de Recursos Humanos
              </Typography>
              <Button color="inherit"><Link to="/">Home</Link></Button>
              <Button color="inherit">Nosotros</Button>
              <Button color="inherit">Servicios</Button>
              <Cart/>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default NavBar