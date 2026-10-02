import './Header.css'
function Header(){
    return(
        <header className='header'>
            <h2 className='header__title'>ReactAcademy</h2>
            <nav className='.header__navegation'>
                <ul className='navegation__items'>
                    <li><a className='navegation__item' href="#hero">Inicio</a></li>
                    <li><a className='navegation__item' href="#courses">Cursos</a></li>
                    <li><a className='navegation__item' href="#footer">Nosotros</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header