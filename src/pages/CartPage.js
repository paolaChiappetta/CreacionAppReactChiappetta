import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import './Pages.css';
import CartItem from "../components/CartItem/CartItem";
import BuyerForm from "../components/BuyerForm/BuyerForm";
import { Link } from 'react-router-dom';

const CartPage = () => {
    const {cartItems, cartTotalPrice, cartTotalQuantity} = useContext(CartContext);
    const [viewBuyerForm, setViewBuyerForm] = useState(false);
    
    return (
        <div>
            {!viewBuyerForm ?
            <>
            <h1 className='title'>Carrito</h1>
            {cartTotalQuantity > 0 ?
            <>
            <table className='cartTable'>
                <thead>
                    <tr>
                        <th className='cartColumns serviceImgAndDescription'>Servicio</th>
                        <th className='cartColumns serviceImgAndDescription'>Descripción</th>
                        <th className='cartColumns cantCol'>Cantidad</th>
                        <th className='cartColumns priceCol'>Precio</th>
                        <th className='cartColumns deleteCol'>Borrar</th>
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
                <button className="finishBuyButton" onClick={() => {setViewBuyerForm(true)}}>Finalizar contratación</button>
            </div>
            </>
            :
            <div className="cartPriceContainer">
            <h3>No tienes servicios cargados</h3>
            <button className="backHomeButton"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Volver al inicio</Link></button>
            </div>}
            </>
            :
            <>
            <BuyerForm
            setViewBuyerForm={setViewBuyerForm}/>
            </>}
        </div>
    )
}

export default CartPage