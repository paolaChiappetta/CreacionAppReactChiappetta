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
        <Box sx={{ flexGrow: 1 }} >
          <AppBar position="static">
            <Toolbar className='navBarContainer'>
              <Logo/>
              <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></Button>
              <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Nosotros</Link></Button>
              <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/services/entrevistas">Entrevistas</Link></Button>
              <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/services/tests">Tests</Link></Button>
              <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/services/pruebas">Pruebas IT</Link></Button>
              <Cart/>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default NavBar