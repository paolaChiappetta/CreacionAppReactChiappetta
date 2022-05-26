import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({items}) => {
    return(
        items.map((item) => {
            return (
                <div className='box' key={item.id}>
                    <Item item={item}/>
                </div>
                    
            );
        })
    )    
}

export default ItemList;