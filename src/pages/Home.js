import './Home.css'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
    <div>
      <main className="backgroundImage">
            <h2 className="slogan">Especialistas en<span><br/>Gestión del Capital Humano</span></h2>
      </main>
      <div className='line'></div> 
      <ItemListContainer title={'Contratá nuestros servicios'} />
    </div>
    )
}

export default Home