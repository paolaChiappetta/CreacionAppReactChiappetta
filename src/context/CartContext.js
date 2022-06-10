import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const itemFounded = (newItem) => {
        return cartItems.find(cartItem => cartItem.id === newItem.id)
    }

    const addItemToCart = (item) => {
        const cartItem = itemFounded(item);
        if(cartItem === undefined){
            setCartItems(cartItems => [...cartItems, item]);
            console.log("Servicio agregado al carrito");
            //pendiente generar un componente como cartItem para agregar cantidad, borrado, etc
        }else{
            console.log("El servicio ya se encuentra en el carrito");
            //faltan mensajes para el usuario
        }
        
    }

    const data = {
        cartItems,
        addItemToCart
    };

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export {CartProvider};