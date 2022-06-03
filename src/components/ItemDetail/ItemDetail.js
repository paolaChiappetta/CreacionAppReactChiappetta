import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    return(
        <div className='serviceDetail'>
            <div className='imgBox'>
                <img src={`/${item.image}`} alt={item.name}/>
                <div>
                    <ItemCount className='itemCount' stock={item.stock} />
                </div>
            </div>
            <div className='itemDetailBox'>
                <h2>{item.name}</h2>
                <h3>Valor $ {item.price}</h3>
                <p>{item.description}</p>
            </div>
            
        </div>
    )    
}

export default ItemDetail;