import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const NotFound = () => {
    return (
    <>
    <div className='itemListContainer'>
        <h1>Página no encontrada</h1>
    </div>
    <div className='itemListContainer'>
        <ItemListContainer title={'Contratar nuestros servicios'} />
    </div></>
    )
}

export default NotFound