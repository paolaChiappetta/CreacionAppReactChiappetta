import {useContext, useState} from "react";
import './ItemCount.css';
import CartContext from "../../context/CartContext";
import Swal from 'sweetalert2';

const ItemCount = ({setShowFinishButton, item}) => {
    const[count, setCount] = useState(0);

    const {addItemToCart} = useContext(CartContext);

    const addCount = () => {
        if(item.stock > count){
            setCount(count + 1);
        }else{
            Swal.fire({
                title: 'Lo lamentamos!',
                text: 'No tenemos este servicio disponible momentáneamente',
                icon: 'info',
                confirmButtonText: 'OK',
                confirmButtonColor:'#1f5996'
            })
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
        }else{
            Swal.fire({
                title: 'Debe ingresar una unidad mayor a 0.',
                text: 'Muchas gracias!',
                icon: 'info',
                confirmButtonText: 'OK',
                confirmButtonColor:'#1f5996'
            })
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