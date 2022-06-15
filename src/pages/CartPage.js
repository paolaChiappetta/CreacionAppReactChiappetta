import { useContext } from "react";
import CartContext from "../context/CartContext";
import './Pages.css';
import CartItem from "../components/CartItem/CartItem";
import { Link } from 'react-router-dom';

const CartPage = () => {
    const {cartItems, cartTotalPrice, cartTotalQuantity} = useContext(CartContext);
    return (
        <div>
            <h1 className='title'>Carrito</h1>
            {cartTotalQuantity > 0 ?
            <>
            <table className='cartTable'>
                <thead>
                    <tr>
                        <th className='cartColumns'>Servicio</th>
                        <th className='cartColumns'>Descripción</th>
                        <th className='cartColumns'>Cantidad</th>
                        <th className='cartColumns'>Precio</th>
                        <th className='cartColumns'>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => {
                        return (
                                <div key={item.id}>
                                    <CartItem item={item}/>
                                </div>
                        );
                    })}
                </tbody>
            </table>
            
            <div className="cartPriceContainer">
                <h4>Cantidad de servicios: {cartTotalQuantity}</h4>
                <h3>Total: $ {cartTotalPrice}</h3>
                <button className="finishBuyButton">Finalizar contratación</button>
            </div>
            </>
            :
            <div className="cartPriceContainer">
            <h3>No tienes servicios cargados</h3>
            <button className="finishBuyButton"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Volver al inicio</Link></button>
            </div>}
        </div>
    )
}

export default CartPage