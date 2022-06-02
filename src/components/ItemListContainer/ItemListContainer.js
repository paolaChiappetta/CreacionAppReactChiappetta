import {useState, useEffect} from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import items from "../../utils/items";

const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(items)
      }, 2000)})
  }

  useEffect(() => {
    getProducts()
    .then((response) => {
      setProducts(response)
    })
    .catch((error) => {
      console.log("Error al cargar datos")
    })}, [])

    return (
        <><h1 className="title">{title}</h1>
        <div className='itemList'>
          <ItemList items={products} />
        </div>
        </>
      );
}

export default ItemListContainer