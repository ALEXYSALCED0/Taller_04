import './HeroSection.css'
import Button from './Button'
function HeroSection(){
    return(
        <section className='hero' id='hero'>
            <h1 className='hero__title'>Aprende <span className='hero__accent'>React</span> desde cero</h1>
            <p className='hero__description'>Domina la libreria mas popular frontend con proyectos practicos y reales.</p>
            <Button variant='big'onClick={()=> document.getElementById("courses").scrollIntoView({behavior:"smooth"})} >Ver cursos</Button>   
        </section>
    )
}
export default HeroSection