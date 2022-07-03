import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import './Pages.css';
import { Link } from 'react-router-dom';

const ServiceDetailNotFound = () => {
    return (
    <>
    <div className='title'>
        <h1 className='notFoundMessage'>El servicio no existe</h1>
        <button className="backHomeButtonNotFound"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Volver al inicio</Link></button>
    </div>
    <div className='itemListContainer'>
        <ItemListContainer title={'Contratar nuestros servicios'} />
    </div></>
    )
}

export default ServiceDetailNotFound