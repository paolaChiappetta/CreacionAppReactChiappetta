import {useState} from "react";
import './ItemCount.css'

const ItemCount = ({stock}) => {
    const[count, setCount] = useState(0);

    const addCount = () => {
        if(stock > count){
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
            console.log(`Se han agregado ${count} unidades de este servicio`);
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