import './AboutUs.css'
import draw from './sobre-nosotros.jpg'

const AboutUs = () => {
    return(
        <main>
            <h1 className="title">Sobre nosotros...</h1>
            <section className="aboutUsContainer">
                <img src={draw} className="aboutUsDraw" alt=""/>
                <p>
                Somos una empresa joven, decidida y apasionada por los desafíos. 
                Nos especializamos en la búsqueda de colaboradores de alto rendimiento y 
                brindamos servicios de capacitaciones a empresas y desarrollo de las competencias 
                que posee cada persona.
                </p>
                <h3>Nuestra misión</h3>
                <p>Brindar herramientas innovadoras para la gestión del capital humano.</p>
                <h3>Nuestra visión</h3>
                <p>Ser referentes a nivel global en la búsqueda de profesionales y desarrollo de profesionales
                para las empresas.</p>
            </section>
        </main>
    )
}

export default AboutUs