import './Cart.css';
import Button from '@mui/material/Button';
import icon from './cartIcon.png'

const Cart = () => {
    return (
        <Button><img src={icon} alt='' className='cartIcon'/></Button>
      );
}

export default Cart