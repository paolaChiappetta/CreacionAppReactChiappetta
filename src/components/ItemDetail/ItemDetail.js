import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    let logo = (item.category === 1) ? 
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/60/000000/external-interviews-job-search-flaticons-lineal-color-flat-icons.png" :
        (item.category === 2) ?
        "https://img.icons8.com/dusk/64/000000/mind-map--v1.png" :
        "https://img.icons8.com/external-justicon-lineal-color-justicon/60/000000/external-exam-back-to-school-justicon-lineal-color-justicon.png";
    return(
        <div className='serviceDetail'>
            <div className='imgBox'>
                <img src={logo} alt={item.name}/>
                <div>
                    <ItemCount className='itemCount' stock={item.stock} />
                </div>
            </div>
            <div>
                <h2>{item.name}</h2>
                <h3>Valor $ {item.price}</h3>
                <p>{item.description}</p>
            </div>
            
        </div>
    )    
}

export default ItemDetail;