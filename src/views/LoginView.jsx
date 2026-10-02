import { useState } from 'react'
import './LoginView.css'

function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() !== '' && password.trim() !== '') {
      setIsSubmitted(true)
    }
  }

  const isButtonDisabled = email.trim() === '' || password.trim() === '' || isSubmitted

  return (
    <main className="login-view">
      <div className="login-card">
        <h2 className="login-card__title">Iniciar Sesión</h2>
        <p className="login-card__microcopy">
          * Formulario solo visual: no valida con ningún backend ni usuario real.
        </p>

        <form onSubmit={handleSubmit} className="login-card__form">
          <div className="login-card__field">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@reactacademy.com"
              disabled={isSubmitted}
              className="login-card__input"
            />
          </div>

          <div className="login-card__field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={isSubmitted}
              className="login-card__input"
            />
          </div>

          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`login-card__button ${isButtonDisabled ? 'login-card__button--disabled' : ''}`}
          >
            {isSubmitted ? 'Sesión Iniciada' : 'Entrar'}
          </button>
        </form>

        {isSubmitted && (
          <p className="login-card__status">
            ¡Campos deshabilitados tras el envío correctamente!
          </p>
        )}
      </div>
    </main>
  )
}

export default LoginView