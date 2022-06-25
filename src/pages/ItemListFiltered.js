import {useState, useEffect} from "react";
import '../components/ItemListContainer/ItemListContainer.css';
import ItemList from "../components/ItemList/ItemList";
import { useParams } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const FilterItemList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams()

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
      const filteredItems = filterByCategory(services, category);
      setProducts(filteredItems);
    })
    .catch((error) => {
      console.log("Error al cargar datos")
  })}, [category])

    const filterByCategory = (items, category) => {
        return items.filter((product) => product.category === category)
    }

    const categoryTitle = category.toUpperCase();
    
    return (
        <><h1 className="title">Contratá nuestros servicios</h1>
        <h2 className="subtitle">{categoryTitle}</h2>
        <div className='itemList'>
          <ItemList items={products} />
        </div>
        </>
      );
}

export default FilterItemList