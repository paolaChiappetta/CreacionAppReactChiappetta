import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <><NavBar />
    <div className='itemListContainer'>
      <ItemListContainer title={'Contratar nuestros servicios'} />
    </div>
    </>
  );
}

export default App;
