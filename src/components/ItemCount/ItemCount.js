import {useContext, useState} from "react";
import './ItemCount.css';
import CartContext from "../../context/CartContext";

const ItemCount = ({setShowFinishButton, item}) => {
    const[count, setCount] = useState(0);

    const {addItemToCart} = useContext(CartContext);

    const addCount = () => {
        if(item.stock > count){
            setCount(count + 1);
        }
    }

    const removeCount = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    const onAdd = () => {
        if(count > 0){
            addItemToCart(item, count);
            setShowFinishButton(true);
        }
    }

    return (
        <>
        <div className="itemCountContainer">
            <div className="itemCount">
                <button className="sizeButton" onClick={removeCount}>-</button>
                <p>{count}</p>
                <button className="sizeButton" onClick={addCount}>+</button>
            </div>
            <div>
                <button className="addCartButton" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
        </>
      );
}

export default ItemCount