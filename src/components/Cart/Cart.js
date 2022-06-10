import './Cart.css';
import Button from '@mui/material/Button';
import icon from './cartIcon.png';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <Button><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/cart"><img src={icon} alt='' className='cartIcon'/></Link></Button>
      );
}

export default Cart