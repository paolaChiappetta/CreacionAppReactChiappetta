import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

    const itemFounded = (newItem) => {
        return cartItems.find(cartItem => cartItem.id === newItem.id)
    }

    const addItemToCart = (item, quantity) => {
        const cartItem = itemFounded(item);
        if(cartItem === undefined){
            const totalPrice = item.price * quantity;
            const newItem = { ...item, quantity: quantity, total: totalPrice}
            setCartItems(cartItems => [...cartItems, newItem]);
            setCartTotalPrice(cartTotalPrice + totalPrice);
            setCartTotalQuantity(cartTotalQuantity + quantity);
            console.log("Servicio agregado al carrito");
        }else{
            console.log("El servicio ya se encuentra en el carrito");
        }
    }

    const removeItemFromCart = (item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
        setCartTotalPrice(cartTotalPrice - item.total);
        setCartTotalQuantity(cartTotalQuantity - item.quantity);
    }

    const data = {
        cartItems,
        cartTotalPrice,
        cartTotalQuantity,
        addItemToCart,
        removeItemFromCart
    };

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export {CartProvider};