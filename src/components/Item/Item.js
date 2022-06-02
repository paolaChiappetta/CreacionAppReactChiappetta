import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    let logo = (item.category === "entrevistas") ? 
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/60/000000/external-interviews-job-search-flaticons-lineal-color-flat-icons.png" :
        (item.category === "tests") ?
        "https://img.icons8.com/dusk/64/000000/mind-map--v1.png" :
        "https://img.icons8.com/external-justicon-lineal-color-justicon/60/000000/external-exam-back-to-school-justicon-lineal-color-justicon.png";
    return (
        <div className='service'>
            <img src={logo} alt={item.name}/>
            <h2>{item.name}</h2>
            <p>$ {item.price}</p>
            <button><Link to={`service/${item.id}`}>Ver detalle</Link></button>
            <ItemCount stock={item.stock} />
        </div>
      );
}

export default Item