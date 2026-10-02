import './CoursesSection.css'
import Card from './Card'
import Button from './Button'

function CoursesSection(){
    const courses=[{
        emoji:'⚛️',
        title:'React Básico',
        description:'Componentes, props, estados y eventos. Todo lo que necesitas para empezar.',
        btnText:'Principiante'

    },{
        emoji:'🔁',
        title:'React Hooks',
        description:'Profundiza en useState, useEffect y crea tus propios custom hooks.',
        btnText:'Intermedio'
    },{
        emoji:'🗂️',
        title:'Estado Global',
        description:'Gestiona el estado con Context API y aprende el cuándo usarlo.',
        btnText:'Intermedio'
    },{
        emoji:'🚀',
        title:'React Avanzado',
        description:'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
        btnText:'Avanzado'
    }
    ]
    return(
        <section className='coursesSection' id='courses'>
            <div className='coursesSection__description'>
                <h2>Nuestros cursos</h2>
                <p className='coursesSection__text'>Elige el camino que mas se adapte a ti!</p>
            </div>
            <div className='coursesSection__cards'>
            {courses.map(c=>(
                <Card emoji={c.emoji} title={c.title} description={c.description} btnText={c.btnText}/>
            )
            )}
            </div>
            
        </section>
    )
}
export default CoursesSection