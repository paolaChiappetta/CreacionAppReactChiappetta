import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import './Pages.css';

const NotFound = () => {
    return (
    <>
    <div className='title'>
        <h1>Página no encontrada</h1>
    </div>
    <div className='itemListContainer'>
        <ItemListContainer title={'Contratar nuestros servicios'} />
    </div></>
    )
}

export default NotFound