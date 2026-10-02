import './Header.css'
import { NavLink, Link } from 'react-router-dom'
function Header(){
    return(
        <header className='header'>
            <Link to="/" className='header__logo'>
                <h2 className='header__title'>ReactAcademy</h2>
            </Link>
            <nav className='header__navegation'>
                <ul className='navegation__items'>
                    <li>
                        <NavLink 
                        to="/" 
                        className={({ isActive }) => `navigation__item ${isActive ? 'navigation__item--active' : ''}`}
                        >
                        Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/cursos" 
                        className={({ isActive }) => `navigation__item ${isActive ? 'navigation__item--active' : ''}`}
                        >
                        Cursos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/nosotros" 
                        className={({ isActive }) => `navigation__item ${isActive ? 'navigation__item--active' : ''}`}
                        >
                        Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/login" 
                        className={({ isActive }) => `navigation__item ${isActive ? 'navigation__item--active' : ''}`}
                        >
                        Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header