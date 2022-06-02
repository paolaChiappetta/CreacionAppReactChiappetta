import {useState, useEffect} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import items from "../../utils/items";
import { useParams, useNavigate } from 'react-router-dom'

const ItemDetailContainer = ({title}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState([]);

  const item = items.find( (service) => {
      return service.id == id
  })

  useEffect(() => {
    if(item === undefined){
      navigate('../../pages/NotFound.js')
  }else {
      setProduct(item)
  }}, [id])

    return (
        <><h1 className="title">{title}</h1>
        <div className='itemDetailContainer'>
          <ItemDetail item={product} />
        </div>
        </>
      );
}

export default ItemDetailContainer