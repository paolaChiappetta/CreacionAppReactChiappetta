import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({item}) => {
    const [showFinishButton, setShowFinishButton] = useState(false);

    return(
        <div className='serviceDetail'>
            <div className='imgBox'>
                <img src={`/${item.image}`} alt={item.name}/>
                {!showFinishButton ?
                <div>
                    <ItemCount className='itemCount'
                    setShowFinishButton={setShowFinishButton}
                    item={item}
                    />
                </div>
                : 
                <div>
                    <button className='finishButton'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/cart">Finalizar contratación</Link></button>
                </div>}
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