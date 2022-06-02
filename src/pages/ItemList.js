import {useState, useEffect} from "react";
import '../components/ItemListContainer/ItemListContainer.css';
import ItemList from "../components/ItemList/ItemList";
import items from "../utils/items";
import { useParams } from 'react-router-dom'

const FilterItemList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams()

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(items)
      }, 2000)})
  }

  useEffect(() => {
    getProducts()
    .then((response) => {
        const filteredItems = filterByCategory(response, category);
        setProducts(filteredItems);
    })
    .catch((error) => {
      console.log("Error al cargar datos")
    })}, [category])

    const filterByCategory = (items, category) => {
        return items.filter((product) => product.category === category)
    }

    return (
        <><h1 className="title">Contratá nuestros servicios - {category}</h1>
        <div className='itemList'>
          <ItemList items={products} />
        </div>
        </>
      );
}

export default FilterItemList