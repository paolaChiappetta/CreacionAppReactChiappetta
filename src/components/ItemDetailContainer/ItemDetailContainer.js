import {useState, useEffect} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, useNavigate} from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import Loading from "../Loading/Loading";

const ItemDetailContainer = ({title}) => {
  const { id } = useParams()
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const getProduct = async () => {
    const ref = doc(db, "servicios", id);
    const serviceFB = await getDoc(ref);
    let service = serviceFB.data();
    if(service === undefined){
      navigate("/ServiceNotFound", { replace: false });
    }else{
      service.id = serviceFB.id;
      return service;
    }
    
  }

  useEffect(() => {
    setIsLoading(true);
    getProduct()
    .then((serv) => {
      setProduct(serv);
      setIsLoading(false);
    })
  }, [id])

    return (
        <><h1 className="title">{title}</h1>
        {!isLoading ?
        <div className='itemDetailContainer'>
          <ItemDetail item={product} />
        </div> :
        <Loading/>}
        </>
      );
}

export default ItemDetailContainer