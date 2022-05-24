import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({title}) => {
    return (
        <><h1 className="title">{title}</h1>
        <ItemCount stock={5} /></>
      );
}

export default ItemListContainer