import { Link } from 'react-router-dom'
import './NotFoundView.css'

function NotFoundView() {
  return (
    <main className="not-found">
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Página no encontrada</h2>
      <p className="not-found__text">
        La ruta a la que intentas acceder no existe.
      </p>
      <Link to="/" className="not-found__link">
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFoundView