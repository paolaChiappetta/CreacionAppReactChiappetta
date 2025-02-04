import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import './BuyerForm.css';
import TextField from '@mui/material/TextField';
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import Success from "../Success/Success";
import validator from 'validator';
import Swal from 'sweetalert2';
import Loading from "../Loading/Loading";

const BuyerForm = ({setViewBuyerForm}) => {
    const {cartItems, cartTotalPrice, clearAllFromCart} = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(false);
    const [formValue, setFormValue] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        emailConfirm: '',
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

    const dateValidations = () => {
        let validaton = false;
        if(formValue.date.length === 5 && formValue.date[2] === '/'){
            let today = new Date();
            let month = parseInt(formValue.date[0] + formValue.date[1]);
            let year = parseInt(formValue.date[3] + formValue.date[4]);
            let actualYear = parseInt(today.getFullYear().toString()[2] + today.getFullYear().toString()[3]);
            let actualMonth = today.getMonth() + 1;
            if(year > actualYear && month > 0 && month <= 12){
                validaton = true;
            }else if(year === actualYear){
                if(month > actualMonth && month <= 12){
                    validaton = true;
                }
            }
        }
        return validaton;
    }

    const saveData = async (newOrder) => {
        const emailValidation = validator.isEmail(formValue.email);
        const dniValidation = formValue.dni.length > 5 ? true : false;
        const cardValidation = formValue.card.length === 16 ? true : false;
        const dateValidation = dateValidations();
        
        let errors = '';

        if(!emailValidation){
            errors = " - Email"
        }else{
            if(formValue.email !== formValue.emailConfirm){
                errors = " - Confirmación de email"
            }
        }

        if(!dniValidation){
            errors+= ' - DNI';
        }
        
        if(!cardValidation){
            errors+= ' - Datos de la tarjeta';
        }

        if(!dateValidation){
            errors+= ' - Fecha de vencimiento';
        }

        if(errors !== ''){
            Swal.fire({
                title: 'Datos inválidos!',
                text: `Verifique: ${errors}`,
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor:'#1f5996',
                width:'320px'
            })
        }else{
            setIsLoading(true);
            const orderFirebase = collection(db, 'ordenes');
            const orderDoc = await addDoc(orderFirebase, newOrder);
            setSuccessOrderNumber(orderDoc.id);
            clearAllFromCart();
            setIsLoading(false);
            setSuccessState(true);
            cartItems.map(item => {
                return(
                    updateService(item)
                )
            })
        }
    }

    const updateService = (item) => {
        const units = item.stock - item.quantity;
        const service = doc(db, "servicios", item.id);
        updateDoc(service, {stock: units});
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
                            label="Nombre" 
                            required={true}
                            variant="outlined" 
                            value={formValue.name}
                            onChange={handleChange}
                        />

                        <TextField 
                            className="formInput"
                            id="outlined-basic" 
                            name="lastName"
                            label="Apellido" 
                            required={true}
                            variant="outlined" 
                            value={formValue.lastName}
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
                            name="emailConfirm"
                            label="Confirmar email"
                            required={true}
                            value={formValue.emailConfirm}
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
                            label="Número de la tarjeta (sin espacios)" 
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
            !isLoading ? 
            <>
                <Success order={successOrderNumber}/>
            </> :
            <>
            <Loading/>
            </>}
        </div>
    )
}

export default BuyerForm