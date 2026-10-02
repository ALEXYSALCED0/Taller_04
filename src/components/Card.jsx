import './Card.css'
import Button from './Button'
function Card({emoji, title, description, btnText}){
    return(
        <div className='card'>
                <h3 className='coursesSection__icons'>{emoji}</h3>
                <h3>{title}</h3>
                <p className='coursesSection__text'>{description}</p>
                <Button variant='primary'>{btnText}</Button>
        </div>
    )
}
export default Card
