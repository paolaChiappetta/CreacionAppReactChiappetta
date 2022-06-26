import './CartItem.css';
import {useContext} from "react";
import CartContext from "../../context/CartContext";
import icon from './cesto.png';

const CartItem = ({item}) => {

    const {removeItemFromCart, addQuantity, removeQuantity} = useContext(CartContext);

    return (
        <tr className='service'>
            <td className='cartColumnsInfo serviceImgAndDescription'><img className='serviceImg' src={`/${item.image}`} alt={item.name}/></td>
            <td className='cartColumnsInfo serviceImgAndDescription'><h4 className='cartItemName'>{item.name}</h4></td>
            <td className='cartColumnsInfo serviceDetailsCant'><div className="itemCount">
                <button className="sizeButton" onClick={() => removeQuantity(item)}>-</button>
                <p>{item.quantity}</p>
                <button className="sizeButton" onClick={() => addQuantity(item)}>+</button>
            </div></td>
            <td className='cartColumnsInfo serviceDetailsPrice'><p className='itemPrice'>$ {item.total}</p><br/></td>
            <td className='cartColumnsInfo serviceDetailsDelete'><div>
                <button className="deleteButton" onClick={() => removeItemFromCart(item)}><img className='bin' alt='' src={icon}/></button>
            </div></td>
        </tr>
      );
}

export default CartItem