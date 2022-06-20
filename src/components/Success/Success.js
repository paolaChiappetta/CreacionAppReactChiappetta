import './Success.css';
import icon from './successIcon.jpg'
import { Link } from 'react-router-dom';

const Success = ({order}) => {
    return (
        <div className='successContainer'>
            <img src={icon} alt='' className='successIcon'/>
            <h2 className='title'>Muchas gracias por contratarnos</h2>
            <h4>Su número de orden es: {order}</h4>
            <button className="backHomeButton"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Volver al inicio</Link></button>
        </div>
    )
}

export default Success