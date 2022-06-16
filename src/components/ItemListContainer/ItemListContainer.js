import {useState, useEffect} from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([]);

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
    setProducts([])
    getProducts()
    .then((services) => {
      setProducts(services);
    })
  
  }, [])

    return (
        <><h1 className="title">{title}</h1>
        <div className='itemList'>
          <ItemList items={products} />
        </div>
        </>
      );
}

export default ItemListContainer