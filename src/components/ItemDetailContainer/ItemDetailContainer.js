import {useState, useEffect} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemDetailContainer = ({title}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const ref = doc(db, "servicios", id);
    const serviceFB = await getDoc(ref);
    let service = serviceFB.data();
    service.id = serviceFB.id;
    return service;
  }

  useEffect(() => {
    getProduct()
    .then((serv) => {
      setProduct(serv);
    })
  }, [id])

    return (
        <><h1 className="title">{title}</h1>
        <div className='itemDetailContainer'>
          <ItemDetail item={product} />
        </div>
        </>
      );
}

export default ItemDetailContainer