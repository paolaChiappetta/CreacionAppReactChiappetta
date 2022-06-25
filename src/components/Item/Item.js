import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div className='service'>
            <img className='serviceImage' src={`/${item.image}`} alt={item.name}/>
            <h4 className='itemName'>{item.name}</h4>
            <p className='itemPrice'>$ {item.price}</p>
            <button className='watchDetailButton'><Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/service/${item.id}`}>Ver detalle</Link></button>
            <ItemCount item={item} />
        </div>
      );
}

export default Item