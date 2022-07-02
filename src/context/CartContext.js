import { createContext, useState } from "react";
import Swal from 'sweetalert2';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
    const [cartTotalPrice, setCartTotalPrice] = useState(JSON.parse(localStorage.getItem('totalPrice')) || 0);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(JSON.parse(localStorage.getItem('totalQuantity')) || 0);

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
            localStorage.setItem('items', JSON.stringify([...cartItems, newItem]));
            localStorage.setItem('totalPrice', (cartTotalPrice + totalPrice));
            localStorage.setItem('totalQuantity', (cartTotalQuantity + quantity));
            Swal.fire({
                title: 'Servicio agregado al carrito!',
                text: 'Muchas gracias',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor:'#1f5996'
            })
        }else{
            Swal.fire({
                title: 'Su servicio ya se encuentra en el carrito!',
                text: 'Diríjase allí para realizar cambios',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor:'#1f5996'
            })
        }
    }

    const removeItemFromCart = (item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
        setCartTotalPrice(cartTotalPrice - item.total);
        setCartTotalQuantity(cartTotalQuantity - item.quantity);
        localStorage.setItem('items', JSON.stringify(newCartItems));
        localStorage.setItem('totalPrice', (cartTotalPrice - item.total));
        localStorage.setItem('totalQuantity', (cartTotalQuantity - item.quantity));
    }

    const clearAllFromCart = () => {
        setCartItems([]);
        setCartTotalPrice(0);
        setCartTotalQuantity(0);
        localStorage.setItem('items', JSON.stringify([]));
        localStorage.setItem('totalPrice', 0);
        localStorage.setItem('totalQuantity', 0);
    }

    const addQuantity = (item) => {
        let pos = cartItems.findIndex((serv) => serv.id === item.id);
        if(cartItems[pos].stock > cartItems[pos].quantity){
            cartItems[pos].quantity = cartItems[pos].quantity + 1;
            cartItems[pos].total = cartItems[pos].total + cartItems[pos].price;
            setCartItems(cartItems);
            setCartTotalPrice(cartTotalPrice + cartItems[pos].price);
            setCartTotalQuantity(cartTotalQuantity + 1);
            localStorage.setItem('items', JSON.stringify(cartItems));
            localStorage.setItem('totalPrice', (cartTotalPrice + cartItems[pos].price));
            localStorage.setItem('totalQuantity', (cartTotalQuantity + 1));
        }else{
            Swal.fire({
                title: 'Haz alcanzado el límite de unidades para este servicio!',
                icon: 'info',
                confirmButtonText: 'OK',
                confirmButtonColor:'#1f5996'
            })
        }
    }

    const removeQuantity = (item) => {
        let pos = cartItems.findIndex((serv) => serv.id === item.id);
        console.log(cartItems, pos);
        if(cartItems[pos].quantity > 1){
            cartItems[pos].quantity = cartItems[pos].quantity - 1;
            cartItems[pos].total = cartItems[pos].total - cartItems[pos].price;
            setCartItems(cartItems);
            setCartTotalPrice(cartTotalPrice - cartItems[pos].price);
            setCartTotalQuantity(cartTotalQuantity - 1);
            localStorage.setItem('items', JSON.stringify(cartItems));
            localStorage.setItem('totalPrice', (cartTotalPrice - cartItems[pos].price));
            localStorage.setItem('totalQuantity', (cartTotalQuantity - 1));
        }else{
            removeItemFromCart(item);
        }
    }

    const data = {
        cartItems,
        cartTotalPrice,
        cartTotalQuantity,
        addItemToCart,
        removeItemFromCart,
        clearAllFromCart,
        addQuantity,
        removeQuantity
    };

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export {CartProvider};