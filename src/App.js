import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import FilterItemList from './pages/ItemListFiltered';
import ItemDetail from './pages/ItemDetail';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services/:category' element={<FilterItemList />} />
            <Route path='/service/:id' element={<ItemDetail />} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/aboutUs' element={<AboutUs />}/> 
            <Route path='*' element={<NotFound />}/> 
        </Routes>
      <Footer/>  
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
