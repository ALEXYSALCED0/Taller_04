import './AboutView.css'

function AboutView() {
  return (
    <main className="about-view">
      <div className="about-view__card">
        <h1 className="about-view__title">Sobre Nosotros</h1>
        <p className="about-view__description">
          En <span className="about-view__accent">ReactAcademy</span> formamos a los desarrolladores del mañana 
          con metodologías prácticas y proyectos reales de la industria.
        </p>
        <div className="about-view__stats">
          <div className="about-view__stat">
            <h3>+1,500</h3>
            <p>Estudiantes formados</p>
          </div>
          <div className="about-view__stat">
            <h3>98%</h3>
            <p>Satisfacción</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutView