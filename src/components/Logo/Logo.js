import './Logo.css';
import Button from '@mui/material/Button';
import logo from './sigma-gif-.gif';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Button><Link to="/"><img src={logo} alt='' className='logoIcon'/></Link></Button>
      );
}

export default Logo