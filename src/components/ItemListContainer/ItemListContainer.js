import {useState, useEffect} from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import Loading from "../Loading/Loading";

const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    const servFB = await getDocs(collection(db, "servicios"));
    const serviceList = servFB.docs.map((doc) => {
      let service = doc.data();
      service.id = doc.id;
      return service;
    })
    return serviceList;
  }

  useEffect(() => {
    setIsLoading(true);
    setProducts([])
    getProducts()
    .then((services) => {
      setProducts(services);
      setIsLoading(false);
    })
  
  }, [])

    return (
        <><h1 className="title">{title}</h1>
        {!isLoading ?
        <div className='itemList'>
          <ItemList items={products} />
        </div> :
        <Loading/>}
        </>
      );
}

export default ItemListContainer