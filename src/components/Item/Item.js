import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div className='service'>
            <img src={`/${item.image}`} alt={item.name}/>
            <h2>{item.name}</h2>
            <p>$ {item.price}</p>
            <button><Link to={`service/${item.id}`}>Ver detalle</Link></button>
            <ItemCount stock={item.stock} />
        </div>
      );
}

export default Item