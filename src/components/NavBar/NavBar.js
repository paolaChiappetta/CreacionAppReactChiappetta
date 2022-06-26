import * as React from 'react';
import './NavBar.css';
import Button from '@mui/material/Button';
import Cart from '../Cart/Cart';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <section>
        <nav>
          <ul class="navListContainer">
            <section className='logo'>
                <li><Logo/></li>
            </section>
            <section className='navItem'>
                <li><Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></Button></li>
            </section>
            <section className='navItem'>
                <li><Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/aboutUs">Nosotros</Link></Button></li>
            </section>
            <section className='navItem'>
                <li><Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/services/entrevistas">Entrevistas</Link></Button></li>
            </section>
            <section className='navItem'>
                <li><Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/services/tests">Tests</Link></Button></li>
            </section>
            <section className='navItem'>
                <li><Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/services/pruebas">Pruebas IT</Link></Button></li>
            </section>
            <section className='navItem'>
                <li><Cart/></li>
            </section>
          </ul>
        </nav>
      </section> 
      <div className='line'></div> 
    </>
  );
}

export default NavBar