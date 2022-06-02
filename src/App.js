import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import FilterItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services/:category' element={<FilterItemList />} />
          <Route path='/service/:id' element={<ItemDetail />} />
          <Route path='*' element={<NotFound />}/> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
