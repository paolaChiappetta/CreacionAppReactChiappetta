import { useContext } from "react";
import CartContext from "../context/CartContext";
import './Pages.css';
import Item from "../components/Item/Item";

const CartPage = () => {
    const {cartItems} = useContext(CartContext);
    return (
    <div className='title'>
        <h1>Carrito</h1>
        <div className='itemList'>
            {cartItems.map((item) => {
                return (
                    
                        <div className='box' key={item.id}>
                            <Item item={item}/>
                        </div>
                    
                        
                );
            })}
        </div>
    </div>
    )
}

export default CartPage