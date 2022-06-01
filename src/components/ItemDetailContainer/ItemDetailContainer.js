import {useState, useEffect} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({title}) => {
  const [product, setProduct] = useState([]);
  const item = 
    {
        "id": 1,
        "category": 1,
        "name": "Entrevista inicial",
        "price": "1500",
        "stock": 3,
        "description": "Es el primer acercamiento hacia los candidatos, con el objetivo de conocer a la persona, cuáles son sus intereses, forma de ser, objetivos, expectativas, situación laboral actual y brindarle mayores detalles de la vacante a la que se está postulando" 
    };

  const getProduct = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(item)
      }, 2000)})
  }

  useEffect(() => {
    getProduct()
    .then((response) => {
      setProduct(response)
    })
    .catch((error) => {
      console.log("Error al cargar datos")
    })}, [])

    return (
        <><h1 className="title">{title}</h1>
        <div className='itemDetailContainer'>
          <ItemDetail item={product} />
        </div>
        </>
      );
}

export default ItemDetailContainer