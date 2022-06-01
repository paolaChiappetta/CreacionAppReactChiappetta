import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <><NavBar />
    <div className='itemListContainer'>
      <ItemListContainer title={'Contratar nuestros servicios'} />
      <br></br>
      <ItemDetailContainer title={'Detalle del Servicio'} />
    </div>
    </>
  );
}

export default App;
