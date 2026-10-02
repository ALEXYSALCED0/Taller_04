import './RegistrationSection.css'
import Button from './Button'
import { useState } from 'react'
function RegistrationSection(){
    const [Number, setNumber]=useState(0)
    return(
        <section className='registrationSection'>
            <h2 className='registrationSection__title'>Cuántos estudiantes van a inscribirse?</h2>
            <p className='registrationSection__description'>Usa los botones para ajustar el número</p>
            <div className='registrationSection__card'>
                <Button onClick={()=>Number>0 ? setNumber(Number-1): 0} variant='round'>-</Button>
                <h2 className='registrationSection__counter'>{Number}</h2>
                <Button onClick={()=>setNumber(Number+1)} variant='round'>+</Button>
            </div>
            <p className='registrationSection__description'>Estudiantes inscritos</p>


        </section>
    )
}
export default RegistrationSection