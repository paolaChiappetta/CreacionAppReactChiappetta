import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div className='service'>
            <img src={`/${item.image}`} alt={item.name}/>
            <h4 className='itemName'>{item.name}</h4>
            <p className='itemPrice'>$ {item.price}</p><br/>
            <button className='watchDetailButton'><Link style={{ textDecoration: 'none', color: 'inherit' }} to={`service/${item.id}`}>Ver detalle</Link></button>
            <ItemCount stock={item.stock} />
        </div>
      );
}

export default Item