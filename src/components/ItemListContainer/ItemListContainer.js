import {useState, useEffect} from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([]);
  const items = 
  [
    {
        "id": 1,
        "category": 1,
        "name": "Entrevista inicial",
        "price": "1500",
        "stock": 3
    },
    {
        "id": 2,
        "category": 1,
        "name": "Entrevista técnica",
        "price": "2500",
        "stock": 3
    },
    {
        "id": 3,
        "category": 1,
        "name": "Entrevista grupal",
        "price": "2000",
        "stock": 3
    },
    {
        "id": 4,
        "category": 2,
        "name": "Test de personalidad",
        "price": "3000",
        "stock": 2
    },
    {
        "id": 5,
        "category": 2,
        "name": "Test de atención y concentración",
        "price": "4000",
        "stock": 3
    },
    {
        "id": 6,
        "category": 2,
        "name": "Test de razonamiento",
        "price": "4500",
        "stock": 5
    },
    {
        "id": 7,
        "category": 3,
        "name": "Prueba IT - Java Jr",
        "price": "4500",
        "stock": 3
    },
    {
        "id": 8,
        "category": 3,
        "name": "Prueba IT - PHP Jr",
        "price": "4500",
        "stock": 3
    }
  ];

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