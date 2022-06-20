import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import './BuyerForm.css';
import TextField from '@mui/material/TextField';
import { collection, addDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import Success from "../Success/Success";

const BuyerForm = ({setViewBuyerForm}) => {
    const {cartItems, cartTotalPrice, clearAllFromCart} = useContext(CartContext);
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
        dni: '',
        card: '',
        date: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartItems.map( item => {
            return {
                id: item.id,
                title: item.name,
                price: item.price,
                quantity: item.quantity
            }
        } ),
        total: cartTotalPrice
    })
    const [successState, setSuccessState] = useState(false);
    const [successOrderNumber, setSuccessOrderNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue});
        saveData({...order, buyer: formValue});
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes');
        const orderDoc = await addDoc(orderFirebase, newOrder);
        setSuccessOrderNumber(orderDoc.id);
        clearAllFromCart();
        setSuccessState(true);
    }

    return (
        <div>
            {!successState ?
            <>
            <h1 className='title'>Cargá tus datos</h1>
            <form onSubmit={handleSubmit}>
                <div className="informationForm">
                        <TextField 
                            className="formInput"
                            id="outlined-basic" 
                            name="name"
                            label="Nombre y Apellido" 
                            required={true}
                            variant="outlined" 
                            value={formValue.name}
                            onChange={handleChange}
                        />
                        <TextField 
                            className="formInput"
                            id="outlined-basic" 
                            name="phone"
                            label="Telefono" 
                            required={true}
                            variant="outlined" 
                            value={formValue.phone}
                            onChange={handleChange}
                        />
                        <TextField 
                            className="formInput"
                            id="outlined-basic" 
                            name="email"
                            label="Mail" 
                            required={true}
                            value={formValue.email}
                            variant="outlined" 
                            onChange={handleChange}
                        />
                        <TextField 
                            className="formInput"
                            id="outlined-basic" 
                            name="dni"
                            label="DNI" 
                            required={true}
                            value={formValue.dni}
                            variant="outlined" 
                            onChange={handleChange}
                        />
                        <TextField 
                            className="formInput"
                            id="outlined-basic" 
                            name="card"
                            label="Número de la tarjeta" 
                            required={true}
                            value={formValue.card}
                            variant="outlined" 
                            onChange={handleChange}
                        />
                        <TextField 
                            className="formInput"
                            id="outlined-basic" 
                            name="date"
                            label="Fecha de vencimiento (mm/aa)" 
                            required={true}
                            value={formValue.date}
                            variant="outlined" 
                            onChange={handleChange}
                        />
                </div>    
                <div className="sendInformationButtonContainer">   
                    <button type="submit" className="sendInformationButton">Enviar información</button>
                </div> 
            </form>
            <div className="sendInformationButtonContainer">   
                <button className="backToCartButton" onClick={() => {setViewBuyerForm(false)}}>Volver al carrito</button>
            </div>
            </> :
            <>
                <Success order={successOrderNumber}/>
            </>}
        </div>
    )
}

export default BuyerForm